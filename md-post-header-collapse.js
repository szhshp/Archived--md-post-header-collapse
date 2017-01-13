var arr_Id_CollapseEnds =  new Array("commentBox");						// when click the final collapse icon, elements after that header will be collapsed until mentioned in this array
var arr_Collapsible_Tag = new Array("H1","H2","H3");						// set the level of collapsible tags, uppercase
var arr_ExcludeElemPrefix_InCollapsible  = new Array("comment-");		// The header elements which you do not want to enable 
var arr_ExcludeElemPrefix_InCollapsing = new Array("sidebar-toc-Ik4D-");	// The elements which will not be collapsed when click the icons
// var excludeTagList = new Array(""); //TODO

function headerCollapsible () {
	$(':not(blockquote)>h1, :not(blockquote)>h2, :not(blockquote)>h3').each(function(index, curHeader) {
		if(index!=0)  {
			ignoreFlag = false;
			for (var i = 0; i < arr_ExcludeElemPrefix_InCollapsible .length; i++) {
				if ($(curHeader).prop('id').indexOf(arr_ExcludeElemPrefix_InCollapsible [i])==0) {
					ignoreFlag = true;
					break;
				};
			};
			if (!ignoreFlag)
				$(curHeader).prepend('<span class="glyphicon glyphicon-minus headerbtn" aria-hidden="true"></span>');
		}
		/**
		* [curHeader: current header]
		* [this: current span icon]
		*/
		$(curHeader).find('span.headerbtn.glyphicon').click(function(event) {
			var tagNameLevel = arr_Collapsible_Tag.indexOf($(curHeader).prop("tagName")); 
			if ($(curHeader).hasClass('collapsed')) {
				/*if this header already collapsed*/
				var displayIt = true;
				$(curHeader).removeClass('collapsed');
				$(this).removeClass('glyphicon-plus');
				$(this).addClass('glyphicon-minus');
			}else{
				var displayIt = false;
				$(curHeader).addClass('collapsed');
				$(this).removeClass('glyphicon-minus');
				$(this).addClass('glyphicon-plus');
			}

			var nextElem = $(curHeader).next();
			var ignoreFlag;
			while( 
				arr_Id_CollapseEnds.indexOf(nextElem.prop('id')) ==-1 
				&& (arr_Collapsible_Tag.indexOf(nextElem.prop("tagName")) == -1 || arr_Collapsible_Tag.indexOf(nextElem.prop("tagName")) > tagNameLevel)
				 ){
				ignoreFlag = false;
				for (var i = 0; i < arr_ExcludeElemPrefix_InCollapsing.length; i++) {
					if (nextElem.length && nextElem.prop('id').indexOf(arr_ExcludeElemPrefix_InCollapsing[i])==0) {
						ignoreFlag = true;
						break;
					};
				};
				if (!ignoreFlag) {
					displayIt? nextElem.show(400):nextElem.hide(400);

					
					if (displayIt && !!nextElem.find('span.headerbtn')) {
						nextElem.find('span.headerbtn').each(function(index, subIcon) {
							$(subIcon).removeClass('glyphicon-plus');
							$(subIcon).addClass('glyphicon-minus');
						});
					};

					if (displayIt && !!nextElem.hasClass('collapsed')) {
						nextElem.removeClass('collapsed');
					};
				};
				nextElem = nextElem.next();
			}
		});
	});    
	if (!(typeof autoCollapse === "undefined")) headerCollapse(1);
}
function headerCollapse(level){
	$(arr_Collapsible_Tag[level]).find('span.headerbtn').click();
}