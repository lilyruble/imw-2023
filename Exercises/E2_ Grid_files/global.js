/* Google Analytics */
// Create tag to load GA script
(function() {
  let ga = document.createElement('script'); 
  let s = document.getElementsByTagName('script')[0]; 
  ga.async = true;
  ga.src = "https://www.googletagmanager.com/gtag/js?id=G-987ZGEQ947"
  s.parentNode.insertBefore(ga, s);
})();
// Add GA code
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-987ZGEQ947');


// Other Setup
$(function(){
  var $body = $('body');

  // Allow LTI iframes to display fullscreen content
  $('iframe#tool_content').attr('allowfullscreen', '1');

  // 'Pages' content isn't injected until after this script runs
  // Delay updates until after DOM modifications are complete
  var timeout;
  $('div.user_content').bind("DOMSubtreeModified", function(){
    if(timeout){ window.clearTimeout(timeout); }
    timeout = setTimeout(function(){
        // Allow iframes to be fullscreen
        $('div.user_content iframe').attr('allowfullscreen', '1');

        // Allow audio elements with controls
        $('div.user_content audio').attr('controls', '1');
      },
      100
    );
  });

  // $('div#wiki_page_show').bind("DOMSubtreeModified", function(){
  //   if(timeout){ window.clearTimeout(timeout); }
  //   timeout = setTimeout(
  //     function(){ $('div.user_content iframe').attr('allowfullscreen', '1'); },
  //     100
  //   );
  // });

  // Hide "Scoring details"
  if($body.hasClass('gradebook2') || $body.hasClass('grades')) {
    $('#show_all_details_button').remove();    // Remove sidebar button to show all grade details
    $('.toggle_score_details_link').remove();  // Remove assignment row button
    $('tr.grade_details').remove();            // Remove the detail content
  }

  // Trigger Canvas' built-in jQuery plugin to make elements fill their containers, even when resizing
  // Used, for example, in the Supervisor/Worker Safety Awarenes Training.
  if (typeof $().fillWindowWithMe == 'function') {
    $('.ocadu-fill-window').fillWindowWithMe()
  }


});


// Replace "Syllabus" with "Outline"
(function() {
  try {
    // Course Nav
    var coursenav = document.getElementById('section-tabs').getElementsByClassName('syllabus')[0]
    if (typeof coursenav !== "undefined") coursenav.innerText = 'Outline'
  } catch(e) {}

  try {
    // Breadcrumb
    var breadcrumb = document.getElementById('breadcrumbs')
    if (typeof breadcrumb !== "undefined") breadcrumb.innerHTML = breadcrumb.innerHTML.replace(/Syllabus/gi, "Outline")
  } catch(e) {}

  try {
    // Course Settings
    var settings = document.getElementById('nav_form').querySelector('[aria-label="Syllabus"]')
    if (typeof settings !== "undefined") settings.innerHTML = settings.innerHTML.replace(/Syllabus/gi, "Outline")
  } catch(e) {}

  try {
    // Syllabus Header
    var header = document.getElementsByClassName('ic-Action-header__Heading')[0]
    if (typeof header !== "undefined") header.innerText = "Course Outline"
  } catch(e) {}

  try {
    // Syllabus Text
    var text = document.getElementById('course_syllabus_details').getElementsByTagName('p')[0]
    if (typeof text !== "undefined") text.innerText = text.innerText.replace(/syllabus/gi, "outline")
  } catch(e) {}

  try {
    // edit syllabus description
    var description = document.getElementById('edit_course_syllabus_form').getElementsByTagName('label')[0]
    if (typeof description !== "undefined") description.innerText = "Outline description:"
  } catch(e) {}

  try {
    // edit syllabus button
    var button = document.getElementById('edit_course_syllabus_form').querySelector('button[type="Submit"]')
    if (typeof button !== "undefined") button.innerText = "Update outline"
  } catch(e) {}
})();
