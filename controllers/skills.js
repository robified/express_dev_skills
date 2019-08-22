var Skill = require('../module/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/');
};

function create(req, res) {
    Skill.addOne(req.body);
    res.redirect('/');
};

function newSkill(req, res) {
    res.render('skills/new');
};

function show(req, res) {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1,
        idx: req.params.id
    });
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(), 
    });
};