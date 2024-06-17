
var express = require('express');
var router = express.Router();

var exportTable = require('../util/exportTables');
const selectAllFromXWhereY = require('./database');

router.get('/getArticleCarousel', function(req, res) {
    
    const matches = selectAllFromXWhereY("ARTICLE", "highlighted", true)
    res.render('index/article_carousel', 
        { 
            articles: matches, 
            car_id: 'article_carousel'
        }
    );
});

router.get('/getProjectCarousel', function(req, res) {

    const matches = selectAllFromXWhereY("PROJECT", "highlighted", true);
    console.log(matches)
    res.render('index/projects_carousel', 
    { 
        projects: matches, 
        car_id: 'project_carousel'
    });
});

router.get('/getEmploymentCubes', function(req, res) {

    const matches = selectAllFromXWhereY("EMPLOYMENT");
    console.log(matches)
    res.render('index/previous_experience_cubes', 
        { 
            past_employment: matches
        }
    );

});

router.get('/Articles', function(req, res) {

    const matches = selectAllFromXWhereY("ARTICLE");
    res.render('articles_list', 
    { 
        articles: matches, 
    });
    
});


router.get('/Resume', function(req, res) {

    res.render('resume', {});
});


router.get('/projectPage', function(req, res) {
    
    var id = req.query.id;
    console.log(id);
    
    const projectFound = selectAllFromXWhereY("PROJECT", "project_id", id);
    const blurbs = selectAllFromXWhereY("BLURB",  "project_id", id);
    const tags = selectAllFromXWhereY("PROJECT_TAG",  "project_id", id)
    
    res.render('projectPage', { 
        project: projectFound[0],
        content: blurbs,
        tags: tags
    });
});



router.get('/Projects', function(req, res) {

    const projects = selectAllFromXWhereY("PROJECT")
    console.log("HERE:", projects)
    res.render('project_list', { 
        projects: projects
    });
});

router.get('/getScreenshotCarousel', function(req, res) {

    var proj_id = req.query.proj_id;

    const screenshots = selectAllFromXWhereY("PROJECT_SCREENSHOT", "project_id", proj_id)
    
    res.render('screenshot_carousel', 
        { 
            screenshots: screenshots, 
            car_id: 'screenshot_carousel'
        }
    );
});

module.exports = router;

