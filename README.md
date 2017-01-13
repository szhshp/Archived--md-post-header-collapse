# md-post-header-collapse
A script to make header collapsible in markdown post

## Requirements

1. Bootstrap
2. Standard Jekyll/Hexo Post based on Markdown

## Installation 

Add JS and CSS to your project.

Recommend to put after other JS files.

## Usage

run `headerCollapsible()`

Mouseon the header you want to collapse/expand an icon will show.

Click the icon to collapse/expand

![test](example/example1.jpg)

## Turning

### BreakId

Sometimes the posts don't have specific ending tag. You can set `BreakId` to set the ending elem, otherwise it will collapse all elem after last header.

Here is an exam to stop at an elem id= `thisIsTheBreakId` when you click the last header.

<pre class="brush: js">
	var arr_Id_CollapseEnds =  new Array("thisIsTheBreakId");
</pre>

### Exclude Elem in Collapsing

If you don't want specific elems to collapse, add some id prefix for those elems and add ignorePrefix here

<pre class="brush: js">
	var arr_ExcludeElemPrefix_InCollapsing = new Array("IDPrefix");
</pre>

### Exclude Elem for Collapsible

Same as `Exclude Elem in Collapsing`, the header id with prefix in this array won't active collapsible and no icon added near this header.

### Collapsible Header Level

To set the level of header which need to be collapse

It have been set to `H1`-`H3` by default. Absolutely the header inside quote will be ignored.

<pre class="brush: js">

	var arr_Collapsible_Tag = new Array("H1","H2","H3");
	// var excludeTagList = new Array("");
	$('h1, h2, h3').each(function(index, el)……

</pre>

If wanna add `H4` you also need to add for CSS

<pre class="brush: css">

	h1:hover span.headerbtn,
	h2:hover span.headerbtn, 
	h3:hover span.headerbtn{
	    opacity: 1;
	    visibility: visible;
	}

</pre>

## Example

[md-Post-Header-Collapse](http://szhshp.org/tech/2016/08/23/jekyllmdpostcollapse.html)

