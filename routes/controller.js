const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})

// var express = require('express');
// var router = express.Router();


// router.get('/getEmploymentCubes', function(req, res) {

//     // var past_employment = query_service.getAllEmployment();

//     console.log('SELECT * FROM employment');

//     pool.query('SELECT * FROM employment', (error, results) => {
//         if (error) {
//             throw error
//         } else {
//             res.render('index/previous_experience_cubes', 
//         { 
//             past_employment: results.rows
//         }
//     );
//         }
//     })

// });

var express = require('express');
var router = express.Router();
// const query_service = require('./queries');


// router.get('/getArticleCarousel', function(req, res) {
        
//     var articles = query_service.getAllHighlightedArticles();
//     res.render('index/article_carousel', 
//         { 
//             articles: articles, 
//             car_id: 'article_carousel'
//         }
//     );
// });

router.get('/getArticleCarousel', function(req, res) {
    pool.query('SELECT * FROM article WHERE highlighted = TRUE', (error, results) => {
        if (error) {
            throw error
        }
        res.render('index/article_carousel', 
        { 
            articles: results.rows, 
            car_id: 'article_carousel'
        }
        );
    })
});

// router.get('/getProjectCarousel', function(req, res) {

//     var projects = query_service.getAllHighlightedProjects();
//     res.render('index/projects_carousel', 
//         { 
//             projects: projects, 
//             car_id: 'project_carousel'
//         }
//     );
// });

router.get('/getProjectCarousel', function(req, res) {

    pool.query('SELECT * FROM project WHERE highlighted = TRUE', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
            res.render('index/projects_carousel', 
            { 
                projects: results.rows, 
                car_id: 'project_carousel'
            });
        })
    
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

//     const past_employment = query_service.getAllEmployment();
//     console.log('NOW: ' + past_employment);
//     res.render('index/previous_experience_cubes', 
//         { 
//             past_employment: past_employment
//         }
//     );
// });

// router.get('/Articles', function(req, res) {

//     var articles = query_service.getAllArticles();

//     res.render('articles_list', 
//         { 
//             articles: articles, 
//         }
//     );
// });

router.get('/Articles', function(req, res) {

    // var articles = query_service.getAllArticles();
    
    pool.query('SELECT * FROM article', (error, results) => {
        if (error) {
            throw error
        }
        res.render('articles_list', 
        { 
            articles: results.rows, 
        });
        })

    
});


router.get('/Resume', function(req, res) {

    res.render('resume', { });
});


router.get('/projectPage', function(req, res) {
    
    // var id = parseInt(req.params.id);
    var id = req.query.id;
    console.log(id);
    
    // var project = query_service.getProjectById(id);
    pool.query('SELECT * FROM project WHERE project_id = ' + id, (error, results1) => {
        if (error) {
            throw error
        }
        // var content = query_service.getProjectPageContentById(id);
        pool.query('SELECT * FROM blurb INNER JOIN blurb_type ON blurb_type.blurb_type_id = blurb.blurb_type_id WHERE project_id = ' + id, (error2, results2) => {
            if (error2) {
                throw error2
            }
            pool.query('SELECT project_tag_value FROM project_tag WHERE project_id = ' + id, (error3, results3) => {
                if (error3) {
                    throw error3
                }
                
                console.log(results1.rows)
                console.log(results2.rows)
                console.log(results3.rows)

                res.render('projectPage', 
                    { 
                        project: results1.rows[0],
                        content: results2.rows,
                        tags: results3.rows
                    }
                );
            })
        })
    })
});


// public List<Blurb> getAllBlurbsByProjectId(Integer project_id) {

//     String SQL_CMD = String.format("SELECT * FROM blurb " +
//             "INNER JOIN blurb_type ON blurb_type.blurb_type_id = blurb.blurb_type_id " +
//             "WHERE project_id = %d", project_id);

//     return jdbcTemplate.query(SQL_CMD, new BlurbRowMapper());
// }



router.get('/Projects', function(req, res) {

    // var projects = parseInt(request.params.id);
    pool.query('SELECT * FROM project', (error, results) => {
        if (error) {
            throw error
        }
        // var async_count = results.rows.length;
        // var alltags = [];
        console.log(results.rows)
        // for (let i = 0; i < results.rows.length; i++) {
        //     pool.query('SELECT project_tag_value FROM project_tag WHERE project_id = ' + results.rows[i], (error2, results2) => {
        //         if (error2) {
        //             throw error2
        //         }
        //         console.log(async_count);
        //         console.log(alltags);
        //         alltags.push(results2.rows);
        //         async_count = async_count - 1;
        //     })
        // }
        
        // while(async_count > 0) {
        //     console.log(async_count);
        // }

        res.render('project_list', 
            { 
                projects: results.rows
                // alltags: alltags
            }
        );
    })
});

router.get('/getScreenshotCarousel', function(req, res) {
    var proj_id = req.query.proj_id;

    // var screenshots = query_service.getAllScreenshotImagesByProjectId(proj_id);
    pool.query('SELECT image_str FROM project_screenshot WHERE project_id = ' + proj_id, (error, results) => {
        if (error) {
            throw error
        }
        res.render('screenshot_carousel', 
            { 
                screenshots: results.rows, 
                car_id: 'screenshot_carousel'
            }
        );
    })
});

module.exports = router;

