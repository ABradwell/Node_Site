
const table_ARTICLE =  [
    {
      article_id: 1,
      article_title: 'Estimating and Analyzing Gaze Points Using RGB Laptop Webcams',
      article_subtitle: 'End-term report from my 4 month placement with the National Research Council of Canada.',
      article_link: '/articles/300064655_Summer_2020_Report.pdf',
      article_image_str: 'article_images/rgb.jpg',
      highlighted: true
    },
    {
      article_id: 2,
      article_title: 'A Cross Cultural Analysis of Dry Sex in the Afro-Surinamese',
      article_subtitle: 'A Cross Cultural Analysis of Dry Sex in the Afro-Surinamese',
      article_link: '/articles/Dry_Sex_in_the_Afro_Surinamese_People.pdf',
      article_image_str: 'article_images/suriname.jpg',
      highlighted: true
    },
    {
      article_id: 3,
      article_title: 'Fears of Mother-Child Transmission Amongst HIV Positive Biological Women',
      article_subtitle: 'A brief look at some of the pressures experienced by HIV positive women, with regards to childbirth and relationships.',
      article_link: '/articles/Relational_Pressures_of_HIV_Positive_Women.pdf',
      article_image_str: 'article_images/hiv_mother.jpg',
      highlighted: false
    },
    {
      article_id: 4,
      article_title: 'Research Proposal: Measuring Self-esteem & Self-doubt Through Emotionally Charged Digital Surveys',
      article_subtitle: 'A detailed proposal for an undergraduate research paper, where multiple choice questions are used to measure a participants self-esteem.',
      article_link: '/articles/Research_Proposal_Doubt_And_Self_Esteem.pdf',
      article_image_str: 'article_images/report.jpg',
      highlighted: false
    },
    {
      article_id: 5,
      article_title: 'The Dangers of Under-Trained and Overconfident Programmers',
      article_subtitle: 'A warning piece on the direction of the computer science job market in the modern age.',
      article_link: 'https://www.linkedin.com/pulse/dangers-under-trained-over-confident-programmers-aiden-bradwell/',
      article_image_str: 'article_images/undertrained.jpg',
      highlighted: true
    },
    {
      article_id: 6,
      article_title: 'Object-Oriented Programming; The (Im)Perfect Layman’s Code',
      article_subtitle: 'A warning on the abundant reliance of object-oriented code.',
      article_link: 'https://www.linkedin.com/pulse/object-oriented-programming-imperfect-laymans-code-aiden-bradwell/',
      article_image_str: 'article_images/oop.jpg',
      highlighted: false
    }
  ]

//   const table_BLURB_TYPE =  [
//     { blurb_type: 'PURE_TEXT', type_value: 'PURE_TEXT' },
//     { blurb_type: 'LEFT_IMAGE', type_value: 'LEFT_IMAGE' },
//     { blurb_type: 'RIGHT_IMAGE', type_value: 'RIGHT_IMAGE' }
//   ]

  // const table_CONTENT_TYPE =  [
  //   { content_type_id: 1, content_type_value: 'EMPLOYMENT' },
  //   { content_type_id: 2, content_type_value: 'PROJECT' },
  //   { content_type_id: 3, content_type_value: 'ARTICLE' }
  // ]
  const table_EMPLOYMENT =  [
    {
      employment_id: 1,
      company_name: 'Zally',
      position_title: 'Software Engineer',
      job_description: 'Founding member of development team working to create a bio-metric authentication service.',
      location: 'Manchester, England',
      start_date: 'July 2023',
      end_date: 'Present',
      image_src: 'work_logos/zallyLogo.svg',
      tags: ["AWS Cloud Computing", "React", "Full Stack Development", "swift", "Biometric Authentication", "React Native", "App Development"]
    },
    {
      employment_id: 2,
      company_name: 'Government of Canada, Department of Fisheries and Oceans',
      position_title: 'Website Development Project Lead',
      job_description: 'Oversaw internal-facing shared-development platform for department members to share their projects.',
      location: 'Ottawa, Ontario, Canada',
      start_date: 'May 2022',
      end_date: 'August 2022',
      image_src: 'work_logos/canada-logo.png',
      tags: ["SQL", "Spring Boot", "Java", "JavaScript", "CSS", "HTML5", "Azure Devops"]
    },
    {
      employment_id: 3,
      company_name: 'Microchip Semiconductor Inc.',
      position_title: 'Embedded Software Developer \n(CO-OP Position)',
      job_description: 'Redesigned and implemented testing platform for integrating timing microchips.',
      location: 'Kanata, Ontario, Canada',
      start_date: 'January 2021',
      end_date: 'August 2021',
      image_src: 'work_logos/microchip-round-logo.png',
      tags: ["TCL", "Python", "PyVisa", "GPIB", "Embedded Engineering", "Robot Framework"]
    },
    {
      employment_id: 4,
      company_name: 'National Research Council',
      position_title: 'Computer Vision Student Researcher \n(CO-OP Position)',
      job_description: 'Experimented with eye-tracking using a RGB webcam to detect early signs of Alzheimer’s Disease.',
      location: 'Ottawa, Ontario, Canada',
      start_date: 'May 2020',
      end_date: 'August 2020',
      image_src: 'work_logos/nrc-logo.png',
      tags: ["Java", "Python", "PyGaze", "PyGame", "Tensorflow"]
    },
    {
      employment_id: 5,
      company_name: 'Discover Year',
      position_title: 'Website Management',
      job_description: 'Manage website design, updates, and development for a young upstart in the Ottawa area.',
      location: 'Ottawa, Ontario, Canada (VIRTUAL)',
      start_date: 'May 2021',
      end_date: 'Present',
      image_src: 'work_logos/discover-year-logo-2.png',
      tags: ["HTML5", "CSS", "JavaScript"]
    },
    {
      employment_id: 6,
      company_name: 'MentorU',
      position_title: 'Website Management',
      job_description: 'Manage website design, updates, and development for a young upstart in the Ottawa area. Used HTML5, CSS, JavaScript',
      location: 'Ottawa, Ontario, Canada (VIRTUAL)',
      start_date: 'March 2020',
      end_date: 'Present',
      image_src: 'work_logos/mentor-u-logo-2.png',
      tags: ["HTML5", "CSS", "JavaScript"]
    },
    {
      employment_id: 7,
      company_name: 'University of Ottawa',
      position_title: 'Regional Mentor',
      job_description: 'Assisted first-year students with their transition into the University of Ottawa community.',
      location: 'Ottawa, Ontario, Canada',
      start_date: 'May 2019',
      end_date: 'April 2020',
      image_src: 'work_logos/uottawa-logo.png',
      tags: ["Public speaking", "Presentation Development", "Interdepartmental Relations"]
    }
  ]
  const table_PROJECT =  [
    {
      project_id: 1,
      project_name: 'Python-Tensorflow Number Recognition',
      project_sub_title: 'Neural Network trained to detect consistent-font numbers amongst large dataset complex images.',
      project_image_str: 'logo/number_recognition_logo.png',
      project_github_str: 'ABradwell/Number_recognition',
      highlighted: true,
      tags: ["Python", "TensorFlow", "Computer Vision"]
    },
    {
      project_id: 2,
      project_name: 'OpenCV Live Hand-Tracker',
      project_sub_title: 'Live OpenCV-Webcam live hand detection and motion tracking application.',
      project_image_str: 'logo/hand_tracker_logo.png',
      project_github_str: 'ABradwell/Hand_Tracking',
      highlighted: false,
      tags: ["Python", "Movement Tracker", "Computer Vision", "OpenCV"]
    },
    {
      project_id: 3,
      project_name: 'Live-Feed Image Processor',
      project_sub_title: 'Laptop webcam image processor, allowing user to stack filters to see combined post-proccessing results.',       
      project_image_str: 'logo/video_morph_logo.png',
      project_github_str: 'ABradwell/Webcam_OpenCv_morph',
      highlighted: true,
      tags: ["Python", "Webcam Processing", "Interactive", "OpenCV"]
    },
    {
      project_id: 4,
      project_name: 'Simple Evolution',
      project_sub_title: 'Single cell organisms battle for surival, using their randomly generated qualities to proove whose best!',      
      project_image_str: 'logo/Evolution_logo.png',
      project_github_str: 'ABradwell/SingleCellSurvival',
      highlighted: false,
      tags: ["Java", "Probability & Stats", "Simulation"]
    },
    {
      project_id: 5,
      project_name: 'Randomized Map Generation',
      project_sub_title: 'Python-based 8-bit map generation, equipped with a little dog to live on the new land!',
      project_image_str: 'logo/map_generation_logo.png',
      project_github_str: 'ABradwell/Automated-Creatures',
      highlighted: false,
      tags: ["Python", "Interactive", "Simulation", "PyGame"]
    },
    {
      project_id: 6,
      project_name: 'Automated Snake Game',
      project_sub_title: 'Python3 based implementation using nylon graphics of an automated-snake game',
      project_image_str: 'logo/snake_game_logo.png',
      project_github_str: 'ABradwell/SnakeGame',
      highlighted: true,
      tags: ["Python", "PyGame", "Automation"]
    },
    {
      project_id: 7,
      project_name: 'Lights Out',
      project_sub_title: 'Java implementation of the classic lights out game.',
      project_image_str: 'logo/lights_off_logo.png',
      project_github_str: 'ABradwell/Portfolio',
      highlighted: false,
      tags: ["Java", "JavaGraphics", "Interactive"]
    },
    {
      project_id: 8,
      project_name: 'Walk-In Clinic Android App',
      project_sub_title: 'Android studio-created app implementing firebase authentication and login',
      project_image_str: 'logo/walk_in_clinic_logo.png',
      project_github_str: 'ABradwell/Pear_Studios',
      highlighted: false,
      tags: ["Java", "Software Design", "Firebase Database"]
    }
  ]

  const table_BLURB = [
    {
      blurb_id: 1,
      title: 'Network Training Data',
      blurb_content: '<table class="w-100"><tbody><tr><th>Class</th><th># of Training Images</th></tr><tr><td>Zero</td><td>1368</td></tr><tr><td>One</td><td>588</td></tr><tr><td>Two</td><td>144</td></tr><tr><td>Three</td><td>109</td></tr><tr><td>Four</td><td>105</td></tr><tr><td>Five</td><td>184</td></tr><tr><td>Six</td><td>119</td></tr><tr><td>Seven</td><td>324</td></tr><tr><td>Eight</td><td>558</td></tr><tr><td>Nine</td><td>493</td></tr></tbody></table>',
      blurb_type: 'PURE_TEXT',
      project_id: 1
    },
    {
      blurb_id: 2,
      title: 'Network Structure',
      blurb_content: '<table class="w-100"><tbody><tr><th>Layer #</th><th>Specific Type</th><th>Settings</th></tr><tr><td>0</td><td>Random Flip</td><td></td></tr><tr><td>1</td><td>Random Rotation</td><td></td></tr><tr><td>2</td><td>Random Zoom</td><td></td></tr><tr><td>3</td><td>Rescaling</td><td></td></tr><tr><td>4</td><td>2D Convolutional</td><td><ul><li>16 filters, 3 kernel size</li><li>Relu activation</li></ul></td></tr><tr><td>5</td><td>2D Max Pooling</td><td></td></tr><tr><td>6</td><td>2D Convolutional</td><td><ul><li>32 filters, 3 kernel size</li><li>Relu activation</li></ul></td></tr><tr><td>7</td><td>2D Max Pooling</td><td></td></tr><tr><td>8</td><td>2D Convolutional</td><td><ul><li>64 filters, 3 kernel size</li><li>Relu activation</li></ul></td></tr><tr><td>9</td><td>2D Max Pooling</td><td></td></tr><tr><td>10</td><td>Dropout</td><td><ul><li>Rate of 0.2</li></ul></td></tr><tr><td>11</td><td></td><td><ul><li>128 units</li><li>Relu activation</li></ul></td></tr><tr><td>12</td><td></td><td><ul><li>10 units</li><li>Relu activation</li></ul></td></tr></tbody></table>',    
      blurb_type: 'PURE_TEXT',
      project_id: 1
    },
    {
      blurb_id: 3,
      title: 'Training Stages',
      blurb_content: 'Initial Training:<br>Initially, the algorithm was applied to separate all number within the image (as determined by \
        the strongest found contours).<br><br>Self-supported Training:<br>With a functional, yet inaccurate network running, a classification was run on all images in the set. <br>The results were then manually filtered, creating a significantly large set of accurate data.<br>The neural network training is run on this larger dataset, creating a significantly higher accuracy.',
      blurb_type: 'PURE_TEXT',
      project_id: 1
    },
    {
      blurb_id: 4,
      title: 'Algorithm',
      blurb_content: '<ol><li>User provides a file-name (in the form of a number).</li><li>Image is opened, and preprocessed using a combination of Gaussian Blur, Canny Edge Detection, External Edge Detection</li><li>Take the four largest contours (most likely the numbers on the image)</li><li>For each contour, Blur, grayscale, and convert to Network Image required sizes</li><li>Neural Network run for each number, and value is concatenated and returned</li>',
      blurb_type: 'PURE_TEXT',
      project_id: 1
    },
    {
      blurb_id: 5,
      title: 'Limitations',
      blurb_content: 'Correctly Identify all 4 numbers: 1294/1324 (97.734%)<br>Correctly Identify all 4 non-corrupted numbers: 1300/1324 (98.187%)<br>With the accuracy of the neural network, it appears that the error lies in incorrectly canny-edged images. Different threshvalues or a blurring method may provide an increase in accuracy',
      blurb_type: 'PURE_TEXT',
      project_id: 1
    },
    {
      blurb_id: 6,
      title: 'External Recognition',
      blurb_content: 'External Code for preparing the program take from https://techvidvan.com/tutorials/hand-gesture-recognition-tensorflow-opencv/<br>Provided pretrained hand-recognition TensorFlow network, implemented through Google Mediapipe<br>From this tutorial, the pretrained network was taken.<br><br>No author information nor git information provided',
      blurb_type: 'PURE_TEXT',
      project_id: 2
    },
    {
      blurb_id: 7,
      title: 'Hand Detection',
      blurb_content: 'Hand detection is executed using Google Mediapipe, with the pretrained hand-skeleton detection network.<br>From this skeleton, a box is drawn around the user’s hand and displayed on the screen.',
      blurb_type: 'PURE_TEXT',
      project_id: 2
    },
    {
      blurb_id: 8,
      title: 'Motion Tracking',
      blurb_content: 'As the hands more, the palm of the hand is measured and recorded. As the last 50 points are displayed on the screen, a post process filters connected points only. If two points are too far apart (which occurs when the hands become swapped or another hand appears abruptly), a line is not draw. This provides a cleaner output of motion tracking for a maximum of two hands.',
      blurb_type: 'PURE_TEXT',
      project_id: 2
    },
    {
      blurb_id: 9,
      title: 'Algorithm',
      blurb_content: 'Input video and output video handlers<br>Initialize 2 empty lists, to store previous hand-positions<br>For each frame grabbed:<br><ol><li>Convert frame to RBG</li><li>Using pretrained hand-detection mp_hand_gesture, detect hands in frame</li><li>Detect palm of hand, and add to appropriate hand-list</li><li>Add point to curve of detected hand</li><li>Draw curve of previous palm-locations</li><li>Limit size of these lists to 75 data-points per hand</li><li> Two points are considered sequential if they are within 75px of each other</li><li> Display and Save Frame for output</li></ol>',
      blurb_type: 'PURE_TEXT',
      project_id: 2
    },
    {
      blurb_id: 10,
      title: 'Graphical Interface',
      blurb_content: 'The application includes a button bank, where each filter includes 3 options. The user is able to <br><ol><li> Add a filter to of this kind queue</li><li> Remove most recently added filter of this kind</li><li> Remove all filters of this kind</li></ol>',
      blurb_type: 'PURE_TEXT',
      project_id: 3
    },
    {
      blurb_id: 11,
      title: 'Reading & Displaying Webcam',
      blurb_content: 'There exists two classes in this program, one for reading the webcam and one for displaying then filtered result. These two classes work in tandem, using threading in python. Both share a common frame-queue, where the VideoReader loads frames and VideoShower pulls them. The VideoShower then send the loaded frame into a FrameFilter class (initialized at program-launch)',
      blurb_type: 'PURE_TEXT',
      project_id: 3
    },
    {
      blurb_id: 12,
      title: 'Filtering Image',
      blurb_content: 'The FrameFilter class is a locally implemented queue class, which stores the filters for each frame to pass through. All possible filters are stored as functions within this class. These include...<br><br><br>Threshold<br>Sharpen<br>Emboss<br>Edge detection (canny)<br>Blur (Normal/Median/Gaussian)<br>Lighten<br>Darken',
      blurb_type: 'PURE_TEXT',
      project_id: 3
    },
    {
      blurb_id: 13,
      title: 'Adjusting Blur Setting',
      blurb_content: 'here exists 8 radio-buttons, where the user can choose one of 5 kernel sizes from...<br><br>1<br>3<br>5<br>7<br>9<br>and 3 where the user can choose Normal, Median, or Gaussian blur methods<br><br>Intention is to add further adjustments for each filter',
      blurb_type: 'PURE_TEXT',
      project_id: 3
    },
    {
      blurb_id: 14,
      title: 'Creatures',
      blurb_content: '<h1>Creatures</h1><p>The creatures have a simple goal: Gain enough SIZE to be able to split into two.<br><br>Moving takes up <b>ENERGY</b><br>Creatures must move to the <b>FOOD</b> to gain <b>SIZE</b> &amp; regain <b>ENERGY</b><br>Larger creatures require less <b>ENERGY</b> to move the same distance as a smaller creature<br>Larger creatures require more <b>FOOD</b> than smaller creatures to <b>SPLIT</b> (Thus why they are larger)<br><br><br>Creatures will be spawned with some combination of the following parameters</p><table class="w-100"><tbody><tr><th><h3>TRAIT</h3></th><th><h3>RANGE</h3></th></tr><tr><td><b>Splitting factor</b></td><td>[18, 50]</td></tr><tr><td><b>Speed</b></td><td>[0.5, 2]</td></tr><tr><td><b>Size</b></td><td>[2, 100]</td></tr><tr><td><b>Energy</b></td><td>[0, 1000] </td></tr></tbody></table>',
      blurb_type: 'PURE_TEXT',
      project_id: 4
    },
    {
      blurb_id: 15,
      title: 'Doubling // Splitting',
      blurb_content: 'When a creature reaches its Splitting-Factor Size, it will divide itself into the next generation.<br>The first draft will maintain the exact genetics of the creatures predecessor<br>Future drafts will allow for minor mutations',
      blurb_type: 'PURE_TEXT',
      project_id: 4
    },
    {
      blurb_id: 16,
      title: 'Food Sources',
      blurb_content: '<table class="cute_table"><tbody><tr><th><h3>Food Type</h3></th><th><h3>Spawn Chance</h3></th><th><h3>Size Given</h3></th><th><h3>Energy Given</h3></th></tr><tr><td><b>Survival</b></td><td>(s_chance %)</td><td>+1 Size</td><td>1/4 refill energy</td></tr><tr><td><b>Beneficial</b></td><td>(b_chance %)</td><td>+2 Size</td><td>1/2 refill energy</td></tr><tr><td><b>Nutrutious</b></td><td>(n_chance %)</td><td>+4 Size</td><td>Full refill energy</td></tr></tbody></table>',
      blurb_type: 'PURE_TEXT',
      project_id: 4
    },
    {
      blurb_id: 17,
      title: 'Energy Drain & Movement Mapping',
      blurb_content: '<div class="info_section "><h1>Energy Drain &amp; Movement Mapping</h1><p> Each creature is hunting <b>one specific food object</b>. <br>This object will appear far away to small creatures, and close to large creatures.<br>This is implemented by creating a <b>Relative Energy Unit</b> to each creature.</p><br><br><h3>Relative Energy Unit</h3><table style="width:100%"><tbody><tr><td><img style="width:100%; max-width: 450px" alt="" src="../Resources/Images/Energy_unit_0.png"><p class="sub_image">Each creature is assigned their own energy-unit size.</p></td><td style="padding-left:50px">For each creature, the distance between them and the food is converted into "how much energy is needed"<br>In this situation, energy is a relative percentage drained (larger creatures SHOULD use more to move and have to move less, however that is not taken into account in this version of the program)<br>One energy unit is the equivalent to the length of the diagonal of a triangle with...<br><br><table class="w-100"><tbody><tr><td>Length -&gt;</td><td>CREATURE SIZE</td></tr><tr><td>Height -&gt;</td><td>CREATURE SIZE</td></tr></tbody></table><br>Therefore, the length of one Energy Unit is the equivalent to <b>SQRT( SIZE^2 + SIZE^2 )</b></td></tr><tr><td><img style="width:100%; max-width: 450px" alt="" src="../Resources/Images/Energy_unit_1.png"><p class="sub_image">The Enegery unit is the hypotenuse of a creatures hitbox</p></td><td style="padding-left:50px">Creating a hitbox around the creature (a square with length of creature size and a height of creature size), <br>A diagonal is calculated between the bottom-left &amp; top right corners.<br>The length of this diagonal is the equivilent of one energy unit.<br><br>All distaces between a creature and a food object are converted into these units, and each step drains the appropriate energy from the creature.<br>If the creature runs out of energy without reaching a food obejct, it will die.</td></tr></tbody></table><div style="text-align:center;width:100%"><img style="max-height: 500px; border:solid 1px black;" alt="" src="../Resources/Images/Energy_unit_3.png"><p class="sub_image">An example of two creatures racing for the same piece of food.</p></div></div>',
      blurb_type: 'PURE_TEXT',
      project_id: 4
    },
    {
      blurb_id: 18,
      title: 'Conclusions',
      blurb_content: 'Interestingly, finding the relation between these variables has been odd. Below is a test design to find a connection between the variables.<br>The intention of this is to find some combination of starting creatures-starting food, energy formula, etc which creates a useful program.<br>(If everytime the program runs, all animals survive, then the program is essentially null/void)<br><br>**DATA IN PROGRESS OF COLLECTION**',
      blurb_type: 'PURE_TEXT',
      project_id: 4
    },
    {
      blurb_id: 19,
      title: 'Menu System',
      blurb_content: 'Designed using click-fields hard coded into the graphics. Each click returns an (x,y) point which is then analyzed to determine if it was within a field. Each click leaves a crosshair on the background, to confirm that while the click did not activate the program, it was received.<br><br><br>The ratio determines the # of cubes placed on the screen, resulting in smaller cubes the higher larger the selected map.',
      blurb_type: 'PURE_TEXT',
      project_id: 5
    },
    {
      blurb_id: 20,
      title: 'Map Generation',
      blurb_content: 'The map generator algorithm fills the map from left to right, using its knowledge of the surrounding map-pieces to create land masses, instead of a map of small and isolated slivers of land. This allows for the animal to traverse the land, and creates a more visually appealing map.<br><br><br>The map always fills the same window size, but adjusts the cube-size to fill with the requested number of pieces. The odds of placing a piece which is harmonious with its surrounding pieces is significantly higher than the odds of it placing a non-homogenous piece.',
      blurb_type: 'PURE_TEXT',
      project_id: 5
    },
    {
      blurb_id: 21,
      title: 'Animal Spawning',
      blurb_content: 'The program finally spawns a creature to roam the map, with the creature’s size being comparative to the map’s cube sizes. The creature is a random walker, staying on the land pieces and avoiding the water. It has a tendency to walk upwards. On to better things, I guess!',
      blurb_type: 'PURE_TEXT',
      project_id: 5
    },
    {
      blurb_id: 22,
      title: 'Back-end',
      blurb_content: 'The system stores a list of cubes (1 for each piece of food eaten). The first cube in the list is considered the head of the snake. The head of the snake finds the fastest root to the next food pellet, and beings its pursuit. As it travels forward, it marks the directional array with the direction it traveled on it. Each body part then moves forward, in the same direction as marked on their underlying-array location.',
      blurb_type: 'PURE_TEXT',
      project_id: 6
    },
    {
      blurb_id: 23,
      title: 'Visuals',
      blurb_content: 'Included in this repository is the graphics.py file, which in its entirety belongs to the developers of nylon graphics. Unfortunatly, nylon graphics was refusing to install through pip during development, resulting in this work around.',
      blurb_type: 'PURE_TEXT',
      project_id: 6
    },
    {
      blurb_id: 24,
      title: 'Back End',
      blurb_content: 'Using two 2d arrays of boolean values, one representing the lights states, and the other where to click to solve the puzzle. The first array is reflected by the light grid, and is what the player is directly interacting with. The other is an underlying array, which implements the breadth-first algorithm to calculate the least amount of buttons t click to turn all the lights on.',      
      blurb_type: 'PURE_TEXT',
      project_id: 7
    },
    {
      blurb_id: 25,
      title: 'Game Board',
      blurb_content: 'Taking two integers as input, the game launces a UI composed of two parts. The Game Board, and the Button Holder. Initially, the game board is initialized to off, and the user can interact with it, attempting to turn all lights on by themselves. If the player finds this too difficult, they are able to turn on the Solution overlay, which directs them to a fully-on grid.',
      blurb_type: 'PURE_TEXT',
      project_id: 7
    },
    {
      blurb_id: 26,
      title: 'Randomize',
      blurb_content: 'This randomly generates a board for the player to begin with, assuring that any board given is guaranteed have at least one solution to turn it on. Any generated boards which are insolvable are discarded.',
      blurb_type: 'PURE_TEXT',
      project_id: 7
    },
    {
      blurb_id: 27,
      title: 'Solution',
      blurb_content: 'Creating an overlay on the board, this button projects the quickest solution onto the board until the player disables it. Each time the player clicks, a new solution is generated so a mis-click does not interfere with a desired quick-solution.',       
      blurb_type: 'PURE_TEXT',
      project_id: 7
    },
    {
      blurb_id: 28,
      title: 'Randomize',
      blurb_content: 'Upon winning, a player is presented with a pop-up which reveals the number of clicks required for them to do so. They are presented with the option to begin again.',
      blurb_type: 'PURE_TEXT',
      project_id: 7
    },
    {
      blurb_id: 29,
      title: 'Firebase Authentication & Storage',
      blurb_content: 'Each login is authenticated through the FireStone FireBase Authentication System, which affirms that an entered email is valid, and then creates a registered account attached to it. The data for these accounts, as well as for all attributes of the app, are then stored in a custom database system. Skills Used: Authentication Implementation, App Design, Android Studio, Database Design and Implementation',
      blurb_type: 'PURE_TEXT',
      project_id: 8
    },
    {
      blurb_id: 30,
      title: 'Admin Functionality',
      blurb_content: 'With an immutable admin account, the application allows for one to remove or add potential services, as well as manage and remove users from the database. It includes an updated list of all Users and Clinics, taken from the online database system',    
      blurb_type: 'PURE_TEXT',
      project_id: 8
    },
    {
      blurb_id: 31,
      title: 'Clinic Functionality',
      blurb_content: 'A clinic registers with its information, and can then actively adjust which services they offer, as well as the times which patients can book in with a doctor. They have a rating, and a current wait time, and are actively updated in the search results based on their name and service they offer.',
      blurb_type: 'PURE_TEXT',
      project_id: 8
    },
    {
      blurb_id: 32,
      title: 'Patient Functionality',
      blurb_content: 'A patient has the ability to search for clinics, book an appointment in their available slots, and leave a rating for the clinic after doing so. The patient’s database contains stored appointments that they have made.',
      blurb_type: 'PURE_TEXT',
      project_id: 8
    }
  ]
  const table_PROJECT_SCREENSHOT =  [
    {
      project_screenshot_id: 1,
      project_id: 1,
      image_str: 'number_recog/partA_example.gif'
    },
    {
      project_screenshot_id: 2,
      project_id: 1,
      image_str: 'number_recog/training_numbers.png'
    },
    {
      project_screenshot_id: 3,
      project_id: 1,
      image_str: 'number_recog/network_structure.png'
    },
    {
      project_screenshot_id: 4,
      project_id: 1,
      image_str: 'number_recog/second_training.png'
    },
    {
      project_screenshot_id: 5,
      project_id: 1,
      image_str: 'number_recog/25650.png'
    },
    {
      project_screenshot_id: 6,
      project_id: 1,
      image_str: 'number_recog/25650.png'
    },
    {
      project_screenshot_id: 7,
      project_id: 1,
      image_str: 'number_recog/38472.png'
    },
    {
      project_screenshot_id: 8,
      project_id: 1,
      image_str: 'number_recog/39354.png'
    },
    {
      project_screenshot_id: 9,
      project_id: 2,
      image_str: 'hand_tracking/result.gif'
    },
    {
      project_screenshot_id: 10,
      project_id: 2,
      image_str: 'hand_tracking/partB_example.gif'
    },
    {
      project_screenshot_id: 11,
      project_id: 3,
      image_str: 'live_video/animation.gif'
    },
    {
      project_screenshot_id: 12,
      project_id: 4,
      image_str: 'single_unit/Energy_unit_0.png'
    },
    {
      project_screenshot_id: 13,
      project_id: 4,
      image_str: 'single_unit/Energy_unit_1.png'
    },
    {
      project_screenshot_id: 14,
      project_id: 4,
      image_str: 'single_unit/Energy_unit_3.png'
    },
    {
      project_screenshot_id: 15,
      project_id: 5,
      image_str: 'map_gen/menu.png'
    },
    {
      project_screenshot_id: 16,
      project_id: 5,
      image_str: 'map_gen/map_animal.png'
    },
    {
      project_screenshot_id: 17,
      project_id: 5,
      image_str: 'map_gen/map_arrows.png'
    },
    {
      project_screenshot_id: 18,
      project_id: 6,
      image_str: 'snake/animation.gif'
    },
    {
      project_screenshot_id: 19,
      project_id: 7,
      image_str: 'lightsout/backend.png'
    },
    {
      project_screenshot_id: 20,
      project_id: 7,
      image_str: 'lightsout/board.png'
    },
    {
      project_screenshot_id: 21,
      project_id: 7,
      image_str: 'lightsout/board_w_solution.png'
    },
    {
      project_screenshot_id: 22,
      project_id: 7,
      image_str: 'lightsout/victory.png'
    },
    {
      project_screenshot_id: 23,
      project_id: 8,
      image_str: 'clinic/ss_admin.png'
    },
    {
      project_screenshot_id: 24,
      project_id: 8,
      image_str: 'clinic/ss_database.png'
    },
    {
      project_screenshot_id: 25,
      project_id: 8,
      image_str: 'clinic/ss_employee.png'
    },
    {
      project_screenshot_id: 26,
      project_id: 8,
      image_str: 'clinic/ss_loggin.png'
    },
    {
      project_screenshot_id: 27,
      project_id: 8,
      image_str: 'clinic/ss_patient_presearch.png'
    },
    {
      project_screenshot_id: 28,
      project_id: 8,
      image_str: 'clinic/ss_schedule.png'
    }
  ]
  const table_PROJECT_TAG =  [
    { project_tag_id: 1, project_id: 1, project_tag_value: 'Python' },
    { project_tag_id: 2, project_id: 1, project_tag_value: 'TensorFlow' },
    {
      project_tag_id: 3,
      project_id: 1,
      project_tag_value: 'Computer Vision'
    },
    { project_tag_id: 4, project_id: 1, project_tag_value: 'OpenCV' },
    { project_tag_id: 5, project_id: 2, project_tag_value: 'Python' },
    {
      project_tag_id: 6,
      project_id: 2,
      project_tag_value: 'Movement Tracker'
    },
    {
      project_tag_id: 7,
      project_id: 2,
      project_tag_value: 'Computer Vision'
    },
    { project_tag_id: 8, project_id: 2, project_tag_value: 'OpenCV' },
    { project_tag_id: 9, project_id: 3, project_tag_value: 'Python' },
    { project_tag_id: 10, project_id: 3, project_tag_value: 'OpenCV' },
    {
      project_tag_id: 11,
      project_id: 3,
      project_tag_value: 'Webcam Processing'
    },
    {
      project_tag_id: 12,
      project_id: 3,
      project_tag_value: 'Interactive'
    },
    { project_tag_id: 13, project_id: 4, project_tag_value: 'Java' },
    {
      project_tag_id: 14,
      project_id: 4,
      project_tag_value: 'Probability & Stats'
    },
    {
      project_tag_id: 15,
      project_id: 4,
      project_tag_value: 'Simulation'
    },
    { project_tag_id: 16, project_id: 5, project_tag_value: 'Python' },
    {
      project_tag_id: 17,
      project_id: 5,
      project_tag_value: 'Simulation'
    },
    { project_tag_id: 18, project_id: 5, project_tag_value: 'PyGame' },
    {
      project_tag_id: 19,
      project_id: 5,
      project_tag_value: 'Interactive'
    },
    { project_tag_id: 20, project_id: 6, project_tag_value: 'Python' },
    { project_tag_id: 21, project_id: 6, project_tag_value: 'PyGame' },
    {
      project_tag_id: 22,
      project_id: 6,
      project_tag_value: 'Automation'
    },
    { project_tag_id: 23, project_id: 7, project_tag_value: 'Java' },
    {
      project_tag_id: 24,
      project_id: 7,
      project_tag_value: 'Java Graphics'
    },
    {
      project_tag_id: 25,
      project_id: 7,
      project_tag_value: 'Interactive'
    },
    { project_tag_id: 26, project_id: 8, project_tag_value: 'Java' },
    {
      project_tag_id: 27,
      project_id: 8,
      project_tag_value: 'Software Design'
    },
    {
      project_tag_id: 28,
      project_id: 8,
      project_tag_value: 'Firebase Database'
    }
  ]

  const tableReference = {
    ARTICLE : table_ARTICLE,
    BLURB : table_BLURB,
    // BLURB_TYPE : table_BLURB_TYPE,
    // CONTENT_TYPE : table_CONTENT_TYPE,
    EMPLOYMENT : table_EMPLOYMENT,
    PROJECT : table_PROJECT,
    PROJECT_SCREENSHOT : table_PROJECT_SCREENSHOT,
    PROJECT_TAG : table_PROJECT_TAG,
  }

  const selectAllFromXWhereY = (table, attribute, value) => {
    
    const foundValues = tableReference[table]
    if (attribute && value) {
        const matching = foundValues.filter((entry) => entry[attribute] == value);
        return matching;
    }

    return foundValues;

  }

module.exports = selectAllFromXWhereY;
