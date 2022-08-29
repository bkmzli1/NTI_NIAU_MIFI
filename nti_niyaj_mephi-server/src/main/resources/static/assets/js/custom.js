(function ($) {
	Drupal.behaviors.Layout = {
	  attach: function (context, settings) {

		function sort_ul(uls,field,isDescending) {
                	uls.each(function(){
                               var li_array=$(this).children('li').remove();
                               li_array.sort(function(a,b) {
                                               return $(a).data(field)>$(b).data(field)?1:-1;
                               });
                               
                               if(isDescending) li_array.reverse();
                               
                               $(this).append(li_array);
                	})
		}

		function subscribers_sort(field_name){
                	sort_ul($("#subscribers-list, .subscribers-list-child"),field_name,false);
		}

		function changed_position_of(elem) {
                	$(elem).closest('.subscriberli').data('position',elem.value).attr('data-position',elem.value);
                	subscribers_sort('position');
		}

                function getParameterByName(name) {
                               var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
                               return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
                }

		$('html').click(function(e) {
			if (e.target.id != 'menu-wrapper' && $(e.target).parents('#menu-wrapper').length == 0 && e.target.id != 'menu-toggle') {
				$('#menu-wrapper').removeClass('opened');
				$('#menu-toggle').removeClass('close');
			}
		});

		$('.views_slideshow_cycle_main').each(function() {
			$(this).swipe({
				swipeLeft:function(event, direction) {
					$(this).parent().find('.vscc_controls .vscc_controls_next a').trigger('click');
				},
				swipeRight:function(event, direction) {
					$(this).parent().find('.vscc_controls .vscc_controls_previous a').trigger('click');
				},
				threshold:30
			});
		});

		$('.jcarousel-container').each(function() {
			$(this).swipe({
				swipeLeft:function(event, direction) {
					$(this).find('a.jcarousel-next').trigger('click');
				},
				swipeRight:function(event, direction) {
					$(this).find('a.jcarousel-prev').trigger('click');
				},
				threshold:30
			});
		});

		$('#cboxContent').each(function() {
			$(this).swipe({
				swipeLeft:function(event, direction) {
					$(this).find('#cboxNext').trigger('click');
				},
				swipeRight:function(event, direction) {
					$(this).find('#cboxPrevious').trigger('click');
				},
				threshold:30
			});
		});
		
		var special = sessionStorage.getItem('special');

		if (special === 'true') $('body').addClass('special');		
	
		$('#special').click(function() {
			if($('body').hasClass('special')) {
				$('body').removeClass('special');
				sessionStorage.setItem('special', 'false');
			}
			else {
				$('body').addClass('special');
				sessionStorage.setItem('special', 'true');
			}			
		});

		$('#search-toggle').click(function() {
			if($('#block-search-form').hasClass('opened')) {
				$('#block-search-form').removeClass('opened');
				$(this).removeClass('close');
			}
			else {
				$('#block-search-form').addClass('opened');
				$(this).addClass('close');
			}			
		});
		
		$('#block-views-signed-files-block .view-signed-files .sig-file .view').click(function() {
			if($(this).hasClass('collapsed')) {
				$(this).removeClass('collapsed');
				$(this).parent().find('.signature-info').removeClass('hidden');
			}
			else {
				$(this).addClass('collapsed');
				$(this).parent().find('.signature-info').addClass('hidden');
			}			
		});

		$('#menu-toggle').click(function() {
			if($('#block-block-3 #menu-wrapper').hasClass('opened')) {
				$('#block-block-3 #menu-wrapper').removeClass('opened');
				$(this).removeClass('close');
			}
			else {
				$('#block-block-3 #menu-wrapper').addClass('opened');
				$(this).addClass('close');
			}			
		});

		$('#mmenu-close').click(function() {
			var API = $('#mmenu_left').data('mmenu');
			API.close();
		});
		
		$('iframe').wrap('<div class="iframe-wrapper"></div>');
	
		$('#block-block-3 #menu-wrapper ul.menu li').hover(
			function()
			{
			  var timer = $(this).data('timer');
			  if(timer) clearTimeout(timer);
			  var li = $(this);
			  li.data('showTimer', setTimeout(function(){li.addClass('hovered'); }, 0));
			},

			function()
			{
			  var showTimer = $(this).data('showTimer');
			  if(showTimer) clearTimeout(showTimer);
			  var li = $(this);
			  li.data('timer', setTimeout(function(){ li.removeClass('hovered'); }, 0));
			}
		);

		$('#block-block-4 #menu-wrapper ul.menu li').hover(
			function()
			{
			  var timer = $(this).data('timer');
			  if(timer) clearTimeout(timer);
			  var li = $(this);
			  li.data('showTimer', setTimeout(function(){li.addClass('hovered'); }, 0));
			},

			function()
			{
			  var showTimer = $(this).data('showTimer');
			  if(showTimer) clearTimeout(showTimer);
			  var li = $(this);
			  li.data('timer', setTimeout(function(){ li.removeClass('hovered'); }, 0));
			}
		);

		$('select.element-invisible').parent().addClass('element-invisible');
		
		$('input.form-checkbox.error, input.form-radio.error, select.form-select.error, textarea.form-textarea.error').parent().parent().addClass('field-error');
		
		$('.accordion_title').click(function(event){
			event.preventDefault();
			var $this = $(this);
			var a = $this.parents('.accordion_block').find('.accordion_data').first();
			a.toggleClass('open');
			$this.toggleClass('rotate');				
		});
		
		$('.view-staff.view-display-id-details .person-title').click(function(event){
			event.preventDefault();
			var $this = $(this);
			var d = $this.parents('.person-block').find('.person-data').first();
			d.toggleClass('open');
			$this.toggleClass('rotate');				
		});

		function date_offset(dt, n) {
		  return new Date(dt.setMonth(dt.getMonth() + n));      	
		}
		
		date = new Date();
		if ($('#edit-field-pub-date-und-0-value-datepicker-popup-0').val() == '') $('#edit-field-pub-date-und-0-value-datepicker-popup-0').val($.datepicker.formatDate('dd.mm.yy', date));
		if ($('#edit-field-pub-date-end-und-0-value-datepicker-popup-0').val() == '') $('#edit-field-pub-date-end-und-0-value-datepicker-popup-0').val($.datepicker.formatDate('dd.mm.yy', date_offset(date, 1)));
		
		$('#latest_galleries ul.latest_captions').on('click','li:not(.active)',function() {
			$(this).addClass('active').siblings().removeClass('active').closest('div#latest_galleries').find('div.latest_tab').removeClass('active').eq($(this).index()).addClass('active');
			if ($(this).hasClass('photo')) {
				$('#latest_galleries .latest_tab.video iframe').each(function(){
					var src = $(this).attr("src");
					$(this).attr("src", src);
				});
			}
		});

		$('#latest_aw ul.latest_captions').on('click','li:not(.active)',function() {
			$(this).addClass('active').siblings().removeClass('active').closest('div#latest_aw').find('div.latest_tab').removeClass('active').eq($(this).index()).addClass('active');
		});
		
		$('#latest_news ul.latest_captions').on('click','li:not(.active)',function() {
			$(this).addClass('active').siblings().removeClass('active').closest('div#latest_news').find('div.latest_tab').removeClass('active').eq($(this).index()).addClass('active');
		});

		changed_position_of('#subscribers-list');

		if ($("#publication-data .irbis-table").length) {
			$("#publication-data .irbis-table").dataTable({
			  "sPaginationType": "full_numbers",
			  "iDisplayLength": 25,
			  "bSort": false,
			  "aoColumnDefs": [{ "bSortable": false, "aTargets": [0] }],
			  "bAutoWidth": false,
			  "aaSorting": [[ 2, 'asc' ]],
			  "fnDrawCallback": function ( oSettings ) {
				  if ( oSettings.bSorted || oSettings.bFiltered ) {
					for ( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ ) {
						$('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( i+1 + "." );
					}
				  }
			  }
			})
		}

	  }
	};
})(jQuery);