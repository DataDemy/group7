$(document).ready(function() {
  $('.delete-article').on('click', function(e) {
    var $target = $(e.target);
    var id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/articles/' + id,
      success: function() {
        alert('Deleting Article');
        window.location.href = "/articles/userartic";
      },
      erorr: function(err) {
        console.log(err);
      }
    })
  })
  $('.delete-dataset').on('click', function(e) {
    var $target = $(e.target);
    var id = $target.attr('dataset-id');
    $.ajax({
      type: 'DELETE',
      url: '/datasets_firstpage/checkdataset/' + id,
      success: function() {
        alert('Deleting dataset');
        window.location.href = "/datasets_firstpage";
      },
      erorr: function(err) {
        console.log(err);
      }
    })
  })
})
