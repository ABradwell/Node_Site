const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})


//  getAllProjects       String SQL_CMD = '';
const getAllProjects = (request, response) => {

    // const id = parseInt(request.params.id)

    pool.query('SELECT * FROM project', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

//  getProjectById       String SQL_CMD = ';
const getProjectById = (request, response) => {

    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM project WHERE project_id = ' + id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getAllHighlightedProjects       String SQL_CMD = 'SELECT * FROM project WHERE highlighted = TRUE';
const getAllHighlightedProjects = (request, response) => {

    pool.query('SELECT * FROM project WHERE highlighted = TRUE', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getAllScreenshotImagesByProjectId       String SQL_CMD = String.format('SELECT image_str FROM project_screenshot WHERE project_id = %d', project_id);
const getAllScreenshotImagesByProjectId = (request, response) => {

    const project_id = parseInt(request.params.project_id)

    pool.query('SELECT image_str FROM project_screenshot WHERE project_id = ' + project_id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getAllBlurbsByProjectId                 String SQL_CMD = String.format('SELECT * FROM blurb ' +
                                            // 'INNER JOIN blurb_type ON blurb_type.blurb_type_id = blurb.blurb_type_id ' +
                                            // 'WHERE project_id = %d', project_id);
const getAllBlurbsByProjectId = (request, response) => {

    const project_id = parseInt(request.params.project_id)

    pool.query('SELECT * FROM blurb INNER JOIN blurb_type ON blurb_type.blurb_type_id = blurb.blurb_type_id WHERE project_id = ' + project_id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

//  getContentTypeIdByString       String SQL_CMD = 'SELECT content_type_id FROM content_type WHERE UPPER(content_type_value) = UPPER('' + given_value + '')';
const getContentTypeIdByString = (request, response) => {

    const given_value = request.params.given_value

    pool.query('SELECT content_type_id FROM content_type WHERE UPPER(content_type_value) = UPPER(' + given_value + ')', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getAllArticles      String SQL_CMD = 'SELECT * FROM article';
const getAllArticles = (request, response) => {

    pool.query('SELECT * FROM article', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getAllHighlightedArticles       String SQL_CMD = 'SELECT * FROM article WHERE highlighted = TRUE';
const getAllHighlightedArticles = (request, response) => {

    pool.query('SELECT * FROM article WHERE highlighted = TRUE', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getArticleById       String SQL_CMD = 'SELECT * FROM article WHERE article_id = ' + id;
const getArticleById = (request, response) => {

    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM article WHERE article_id = ' + id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//   getAllEmployment      String SQL_CMD = 'SELECT * FROM employment';
const getAllEmployment = (request, response) => {

    // const id = parseInt(request.params.id)

    pool.query('SELECT * FROM employment', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getEmploymentById      String SQL_CMD = 'SELECT * FROM employment WHERE employment_id = ' + id;
const getEmploymentById = (request, response) => {

    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM employment WHERE employment_id = ' + id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

// 
//  getAllContentType       String SQL_CMD = 'SELECT * FROM content_type';
const getAllContentType = (request, response) => {

    pool.query('SELECT * FROM content_type', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


//  getAllTags       String SQL_CMD = 'SELECT project_tag_value FROM project_tag';
const getAllTags = (request, response) => {

    pool.query('SELECT project_tag_value FROM project_tag', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


// getProjectTagById        String SQL_CMD = 'GET project_tag_value FROM project_tag WHERE project_tag_id = ' + tag_id;
const getProjectTagById = (request, response) => {

    const tag_id = parseInt(request.params.tag_id)

    pool.query('GET project_tag_value FROM project_tag WHERE project_tag_id = ' + tag_id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


// getAllTagValuesByProjectId        String SQL_CMD = String.format('SELECT project_tag_value FROM project_tag WHERE project_id = %d', project_id);
const getAllTagValuesByProjectId = (request, response) => {

    const project_id = parseInt(request.params.project_id)

    pool.query('SELECT project_tag_value FROM project_tag WHERE project_id = ' + project_id, (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}



module.exports = {
    getAllArticles,
    getAllBlurbsByProjectId,
    getAllContentType,
    getAllEmployment,
    getAllHighlightedArticles,
    getAllHighlightedProjects,
    getAllProjects,
    getAllScreenshotImagesByProjectId,
    getAllTagValuesByProjectId,
    getAllTags,
    getArticleById,
    getContentTypeIdByString,
    getEmploymentById,
    getProjectById,
    getProjectTagById,
  }