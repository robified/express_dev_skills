var Skill = require('../module/skill');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('skills/show', {
        skill: SkillOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(), 
    });
};