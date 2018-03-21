/*
    need to user following css
    .hide {
        display: none;
    }
*/

(function ( $ ) {
    var settings = null;
    var tabDropDownMenu = null;
    var hasItemForDropDown = false;
    var itemBeforeDropDown = item2ndBeforeDropDown = null;
    var tabMenues = [];
    var resizeTimer;

    var _tabDropDownTrigger = function() {
        $.each(tabMenues, function() {
            var tabList = ($(this).find('.' + settings.tabList).length ? $(this).find('.' + settings.tabList) : this);
            _tabDropDown(this, tabList);
        });
    }


    var _tabDropDown = function(element, tabList) {
        tabDropDownMenu = $('<ul class="dropdown-menu"></ul>');

        $(element).children('.jqtabdrop').remove();
        $(tabList).children().removeClass('hide');
        var activeTab = null;
        $(tabList).children().each(function(ind, ele) {
            if ($(ele).position().top > 0 || $(window).width() <= 767) {
                $(ele).clone(true).appendTo(tabDropDownMenu);
                $(ele).addClass('hide');
                hasItemForDropDown = true;
                activeTab = $(ele).hasClass('active-tab') ? ele : activeTab;
            } else {
            	item2ndBeforeDropDown = itemBeforeDropDown;
            	itemBeforeDropDown = ele; 
            }
        });

        if (hasItemForDropDown) { 

            $(element).append('<li class="dropdown hide jqtabdrop tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="tab-head">'+settings.text+'</span> <b class="caret"></b></a></li>');
            
            $(element).children('.tabdrop').removeClass('hide').append(tabDropDownMenu);
            
            if (itemBeforeDropDown != null && $(element).children('.tabdrop').position().top > 0) {
                $(itemBeforeDropDown).clone(true).prependTo(tabDropDownMenu);
                $(itemBeforeDropDown).addClass('hide');
                activeTab = $(itemBeforeDropDown).hasClass('active-tab') ? itemBeforeDropDown : activeTab;
            }

            //if (activeTab != null) $(element).children('.jqtabdrop').addClass('active-tab-text');//.find('span.tab-head').text($(activeTab).text());
			if (activeTab != null) $(element).children('.jqtabdrop').addClass('active-tab-text').find('span.tab-head').text($(activeTab).text());
            if (item2ndBeforeDropDown != null && $(element).children('.tabdrop').position().top > 0) {
            	$(item2ndBeforeDropDown).clone(true).prependTo(tabDropDownMenu);
            	$(item2ndBeforeDropDown).addClass('hide');
            }

            if(tabDropDownMenu.children().length == 0) $(element).children('.jqtabdrop').remove();
            
        }


        $(element).removeClass(settings.overflowClass);
    }

    $(window).resize(function() {
        clearTimeout(resizeTimer);
        $.each(tabMenues, function() {$(this).addClass(settings.overflowClass);});
        resizeTimer = setTimeout(_tabDropDownTrigger, 250);
        
    });
    
    $.fn.jqtabdrop = function( options ) {
 
        // This is the easiest way to have default options.
        settings = $.extend({
            // These are the defaults.
            text: '<i class="icon-align-justify"></i>',
            tabList: 'jqtab-list',
            overflowClass: 'overflow-style'
        }, options );
 
        return this.each(function () {
            tabMenues.push(this);
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(_tabDropDownTrigger, 250);
        });
 
    };
 
}( jQuery ));
