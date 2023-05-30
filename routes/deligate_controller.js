



var express = require('express');
var router = express.Router();
const query_service = require('./queries');


router.get('/getArticleCarousel', function(req, res) {

    var articles = query_service.getAllHighlightedArticles();
    res.render('index/article_carousel', 
        { 
            articles: articles, 
            car_id: 'article_carousel'
        }
    );
});

router.get('/getProjectCarousel', function(req, res) {

    var projects = query_service.getAllHighlightedProjects();
    res.render('index/projects_carousel', 
        { 
            projects: projects, 
            car_id: 'project_carousel'
        }
    );
});

// router.get('/getEmploymentCarousel', function(req, res) {

//     var past_employment = query_service.getAllEmployment();
//     res.render('index/employment_carousel', 
//         { 
//             past_employment: past_employment, 
//             car_id: 'work_carousel'
//         }
//     );
// });

router.get('/getEmploymentCubes', function(req, res) {

    // var past_employment = query_service.getAllEmployment();

    console.log('SELECT * FROM employment');

    pool.query('SELECT * FROM employment', (error, results) => {
        if (error) {
            throw error
        } else {
            res.render('index/previous_experience_cubes', 
        { 
            past_employment: results.rows
        }
    );
        }
    })

});

// router.get('/getEmploymentCubes', function(req, res) {

//     var past_employment = query_service.getAllEmployment();
//     res.render('index/previous_experience_cubes', 
//         { 
//             past_employment: past_employment
//         }
//     );
// });

router.get('/Articles', function(req, res) {

    var articles = query_service.getAllArticles();

    res.render('articles_list', 
        { 
            articles: articles, 
        }
    );
});


router.get('/Resume', function(req, res) {

    res.render('resume', { });
});


router.get('/projectPage', function(req, res) {

    var id = parseInt(request.params.id);
    var project = query_service.getProjectById(id);
    var content = query_service.getProjectPageContentById(id);
    var tags = query_service.getAllTagValuesByProjectId(id);

    res.render('projectPage', 
        { 
            project: project, 
            content: content,
            tags: tags
        }
    );
});

router.get('/Projects', function(req, res) {

    var projects = parseInt(request.params.id);
    var alltags = query_service.getAllTags();

    res.render('project_list', 
        { 
            projects: projects, 
            alltags: alltags
        }
    );
});

router.get('/getScreenshotCarousel', function(req, res) {

    var proj_id = parseInt(request.params.proj_id);
    var screenshots = query_service.getAllScreenshotImagesByProjectId(proj_id);

    res.render('screenshot_carousel', 
        { 
            screenshots: screenshots, 
            car_id: 'screenshot_carousel'
        }
    );
});

module.exports = router;

