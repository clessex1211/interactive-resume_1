var bio = {
	"name" : "Cassandra Eagleton",
	"role" : "Web Developer",
	"contacts" : [{
		"mobile": "770-555-8098",
		"email": "clessex1211@gmail.com",
		"location": "Atlanta, GA"
	}],
	"bioPic" : "images/pic.jpg",
	"welcomeMessage" : "Welcome to my page",
	"skills" : ["Forward thinking", "Learning", "Applying", "Organizing"]
};

var work = {
	"jobs": [
	{
		"employer": "WIKA",
		"title": "Jr Software Developer",
		"dates": "2014-current",
		"location": "Atlanta, GA",
		"description": "Develop desktop and web applications for the purposes of the business"
	},
	{
		"employer": "WIKA",
		"title": "Business Analyst - Finance",
		"dates": "2002-2014",
		"location": "Atlanta, GA",
		"description": "Analysis of business financial performance"
	}
  ] 
};

var projects = {
	"project": [
	{
		"title": "Ecommerce",
		"dates": "2015",
		"description": "Developed and designed a web based ecommerce application",
		"images": ["images/gaugebeach.jpg"]
	},
	{
		"title": "something else",
		"dates": "2015",
		"description": "something else again",
		"images": ["images/gaugebeach.jpg"]
	}
  ]
};

var education = {
	"schools": [
	{
		"name": "DeVry University",
		"location": "Atlanta, GA",
		"degree": "BS",
		"major": "Technical Management",
		"years": "2011-2013",
		"url": "http://www.devry.edu"
	}
  ],
	"onlineCourses": [
	{
		"title": "Front End Web Development",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com"
	}
  ]
};	

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for (var skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for (var contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedLocation =HTMLlocation.replace("%data%", bio.contacts[contact].location);
       	$("#footerContacts").append(formattedMobile,formattedEmail,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedLocation);
	};
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation,formattedDescription);
	}
};

projects.display = function() {
	for (var project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

education.display = function() {
		
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
			 
			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

work.display();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);