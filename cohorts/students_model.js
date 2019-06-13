const knex = require('knex')

const config = require('../knexfile')

const db = knex(config.development)

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find () {
    return db('students')
}

function findById (id) {
    return db('students')
        .whereIn('cohort_id', id)
        .first()
}

function add (student) {
    return db('students')
        .insert(student)
        .then(ids => {
            const [id] = ids
            return findById(id)
        })
}

function update (id, changes) {
    return db('students')
        .where({ id })
        .update(changes)
        .then(() => {
            return db('students')
                .where({ id })
                .first()
        })
}

function remove(id) {
    return db('students')
        .where({ id })
        .del()
}