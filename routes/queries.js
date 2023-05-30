const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})


//  getAllProjects       String SQL_CMD = '';
function getAllProjects () {

    // const id = parseInt(request.params.id)

    pool.query('SELECT * FROM project', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}

//  getProjectById       String SQL_CMD = ';
function getProjectById () {

    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM project WHERE project_id = ' + id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getAllHighlightedProjects       String SQL_CMD = 'SELECT * FROM project WHERE highlighted = TRUE';
function getAllHighlightedProjects () {

    pool.query('SELECT * FROM project WHERE highlighted = TRUE', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getAllScreenshotImagesByProjectId       String SQL_CMD = String.format('SELECT image_str FROM project_screenshot WHERE project_id = %d', project_id);
function getAllScreenshotImagesByProjectId (project_id) {

    pool.query('SELECT image_str FROM project_screenshot WHERE project_id = ' + project_id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getAllBlurbsByProjectId                 String SQL_CMD = String.format('SELECT * FROM blurb ' +
                                            // 'INNER JOIN blurb_type ON blurb_type.blurb_type_id = blurb.blurb_type_id ' +
                                            // 'WHERE project_id = %d', project_id);
function getAllBlurbsByProjectId (project_id) {

    pool.query('SELECT * FROM blurb INNER JOIN blurb_type ON blurb_type.blurb_type_id = blurb.blurb_type_id WHERE project_id = ' + project_id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}

//  getContentTypeIdByString       String SQL_CMD = 'SELECT content_type_id FROM content_type WHERE UPPER(content_type_value) = UPPER('' + given_value + '')';
function getContentTypeIdByString (given_value) {

    pool.query('SELECT content_type_id FROM content_type WHERE UPPER(content_type_value) = UPPER(' + given_value + ')', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getAllArticles      String SQL_CMD = 'SELECT * FROM article';
function getAllArticles () {

    pool.query('SELECT * FROM article', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getAllHighlightedArticles       String SQL_CMD = 'SELECT * FROM article WHERE highlighted = TRUE';
function getAllHighlightedArticles () {

    pool.query('SELECT * FROM article WHERE highlighted = TRUE', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getArticleById       String SQL_CMD = 'SELECT * FROM article WHERE article_id = ' + id;
function getArticleById (id) {

    pool.query('SELECT * FROM article WHERE article_id = ' + id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//   getAllEmployment      String SQL_CMD = 'SELECT * FROM employment';
async function getAllEmployment () {

    
    const res = await pool.query('SELECT * FROM employment', (error, results) => {
        if (error) {
            throw error
        } else {
            console.log(results.rows);
            return results.rows; 
        }
    })

    return res;
}


//  getEmploymentById      String SQL_CMD = 'SELECT * FROM employment WHERE employment_id = ' + id;
function getEmploymentById (id) {

    // const id = parseInt(request.params.id);

    pool.query('SELECT * FROM employment WHERE employment_id = ' + id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;;
    })
}

// 
//  getAllContentType       String SQL_CMD = 'SELECT * FROM content_type';
function getAllContentType () {

    pool.query('SELECT * FROM content_type', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


//  getAllTags       String SQL_CMD = 'SELECT project_tag_value FROM project_tag';
function getAllTags () {

    pool.query('SELECT project_tag_value FROM project_tag', (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


// getProjectTagById        String SQL_CMD = 'GET project_tag_value FROM project_tag WHERE project_tag_id = ' + tag_id;
function getProjectTagById () {

    const tag_id = parseInt(request.params.tag_id)

    pool.query('GET project_tag_value FROM project_tag WHERE project_tag_id = ' + tag_id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
    })
}


// getAllTagValuesByProjectId        String SQL_CMD = String.format('SELECT project_tag_value FROM project_tag WHERE project_id = %d', project_id);
function getAllTagValuesByProjectId () {

    const project_id = parseInt(request.params.project_id)

    pool.query('SELECT project_tag_value FROM project_tag WHERE project_id = ' + project_id, (error, results) => {
    if (error) {
        throw error
    }
    return results.rows;
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