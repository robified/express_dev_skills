const skills = [
    {skill: 'Git'},
    {skill: 'JavaScript'},
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'jQuery'},
    {skill: 'Node.js'},
    {skill: 'Express'},
    {skill: 'MongoDB'}
];

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
};

function addOne(skill) {
    skills.push(skill)
};

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};