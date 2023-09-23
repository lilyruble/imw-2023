// JS for Curricular sub-account only
$(function(){
  var $body = $('body');
  if($body.hasClass('gradebook')) {
    // Insert link to submit grades from gradebook page
    var gradesToolId = 468; // ID of the LTI tool
    // var gradesToolId = 456; // ID of the LTI tool
    var submitGradesUrlPrefix = ENV.GRADEBOOK_OPTIONS.context_url;
    var submitGradesUrl = submitGradesUrlPrefix+'/external_tools/'+gradesToolId;
    var buttonHTML = '<a href="'+submitGradesUrl+'" class="ui-button"><i class="icon-assignment"></i> Submit Final Grades</a>';
    $('.gradebook_menu').prepend(buttonHTML);
  }

  if($body.hasClass('syllabus')) {
    let i = 0;
    let timer;
    $('.edit_syllabus_link').after('<a class="Button Button--primary icon-compose" id="launch_outline_editor_button">Course Outline Builder</a>');
    $('#launch_outline_editor_button').click(function(){

      if(!syllabusFormIsVisible()) {
        $('#edit_course_syllabus_form').triggerHandler("edit");
      }

      new Promise(function(resolve, reject){
        timer = setInterval(openAppsMenu, 10, resolve, reject);
      })
      .then(function(){
        clearInterval(timer);
        i = 0;
        timer = setInterval(openBuilder, 10);
      })
      .catch(function(e){
        clearInterval(timer);
      });
    });

    function syllabusFormIsVisible() {
      const form = document.querySelector("#edit_course_syllabus_form")
      return form.style.display !== "none"
    }

    function moreBtn() {
      var btn = $('button[aria-label="More..."]');
      return btn.length ? btn : false;
    }

    function appsBtn() {
      var btn = $('button[aria-label="Apps"]');
      return btn.length ? btn : false;
    }

    function builderBtn() {
      var btn = $('span[aria-label="Open Course Outline Builder application"]');
      return btn.length ? btn : false;
    }

    function builderShortcutBtn() {
      var btn = $('div[title="Course Outline Builder"]');
      return btn.length ? btn : false;
    }

    function viewAllBtn() {
      var btn = $('div[title="View All"]');
      return btn.length ? btn : false;
    }

    function openAppsMenu(resolve, reject){
      if(appsBtn()){
        appsBtn().click();
        resolve();
      }
      else if(moreBtn()){
        moreBtn().click();
      }
      else if(i++ == 500){
        reject();
      }
    }

    function openBuilder(){
      if(builderShortcutBtn()){
        clearInterval(timer);
        builderShortcutBtn().click();
      }
      else if(builderBtn()){
        clearInterval(timer);
        builderBtn().click();
      }
      else if(viewAllBtn()){
        viewAllBtn().click();
      }
      else if(i++ == 500){
        clearInterval(timer);
      }
    }
  }
});
