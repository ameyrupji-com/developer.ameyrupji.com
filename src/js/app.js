window.site = (function() {
    return {}
})();

site.all = (function (){
    "use strict"
  
    var Model = {
    },
    View = {
        navBarClass: '.navbar'
    },
    Controller = {
        init: function init() {
            console.log('In app:init()')
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);