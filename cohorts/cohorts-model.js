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
    return db('cohorts')
}

function findById (id) {
    return db('cohorts')
        .where({ id })
        .first()
}

function add (cohort) {
    return db('cohorts')
        .insert(cohort)
        .then(ids => {
            const [id] = ids
            return findById(id)
        })
}

function update (id, changes) {
    return db('cohorts')
        .where({ id })
        .update(changes)
        .then(() => {
            return db('cohorts')
                .where({ id })
                .first()
        })
}

function remove(id) {
    return db('cohorts')
        .where({ id })
        .del()
}