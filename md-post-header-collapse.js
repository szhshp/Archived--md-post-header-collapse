	var arrBreakId =  new Array("uyan_frame");
	var arrCollapsableTag = new Array("H1","H2","H3");
	var arrExcludeTagPrefix = new Array("sidebar-toc-Ik4D-");
	// var excludeTagList = new Array(""); //TODO
	$(':not(blockquote)>h1, :not(blockquote)>h2, :not(blockquote)>h3').each(function(index, el) {
		if(index!=0)  $(el).prepend('<span class="glyphicon glyphicon-minus headerbtn" aria-hidden="true" title="click to clps and expd"></span>');
		/**
		* [el: current header]
		* [this: current span icon]
		*/
		$(el).find('span.headerbtn.glyphicon').click(function(event) {
			var tagNameLevel = arrCollapsableTag.indexOf($(el).prop("tagName")); 
			if ($(el).hasClass('collapsed')) {
				/*if this header already collapsed*/
				var displayStatus = true;
				$(el).removeClass('collapsed');
				$(this).removeClass('glyphicon-plus');
				$(this).addClass('glyphicon-minus');
			}else{
				var displayStatus = false;
				$(el).addClass('collapsed');
				$(this).removeClass('glyphicon-minus');
				$(this).addClass('glyphicon-plus');
			}

			var nextElem = $(el).next();
			var ignoreFlag;
			while( 
				arrBreakId.indexOf(nextElem.prop('id')) ==-1 
				&& (arrCollapsableTag.indexOf(nextElem.prop("tagName")) == -1 || arrCollapsableTag.indexOf(nextElem.prop("tagName")) > tagNameLevel)
				 ){
				ignoreFlag = false;
				console.log(nextElem);
				for (var i = 0; i < arrExcludeTagPrefix.length; i++) {
					if (nextElem.prop('id').indexOf(arrExcludeTagPrefix[i])==0) {
						ignoreFlag = true;
						break;
					};
				};
				if (!ignoreFlag) {
					displayStatus? nextElem.show(400):nextElem.hide(400);
				};
				nextElem = nextElem.next();
			}
		});
	});    