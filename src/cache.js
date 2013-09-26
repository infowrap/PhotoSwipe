// Copyright (c) %%year%% by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: %%version%%

(function(window, klass, Util){


	Util.registerNamespace('Code.PhotoSwipe.Cache');
	var PhotoSwipe = window.Code.PhotoSwipe;



	PhotoSwipe.Cache.Mode = {

		normal: 'normal',
		aggressive: 'aggressive'

	};



	PhotoSwipe.Cache.Functions = {

		/*
		 * Function: getImageSource
		 * Default method for returning an image's source
		 */
		getImageSource: function(el){
			return el.href;
		},



		/*
		 * Function: getImageCaption
		 * Default method for returning an image's caption
		 * Assumes the el is an anchor and the first child is the
		 * image. The returned value is the "alt" attribute of the
		 * image.
		 */
		getImageCaption: function(el){

			if (el.nodeName === "IMG"){
				return Util.DOM.getAttribute(el, 'alt');
			} else if (el.nodeName === "DIV"){
				// Infowrap CUSTOM
				return Util.DOM.getData(el, 'toolbar-caption');
				// END Infowrap CUSTOM
			}
			var i, j, childEl;
			for (i=0, j=el.childNodes.length; i<j; i++){
				childEl = el.childNodes[i];
				if (childEl.nodeName === 'IMG'){
					return Util.DOM.getAttribute(childEl, 'alt');
				} else if (childEl.nodeName === 'DIV'){
					// Infowrap CUSTOM
					return Util.DOM.getData(childEl, 'toolbar-caption');
					// END Infowrap CUSTOM
				}
			}

		},



		/*
		 * Function: getImageMetaData
		 * Can be used if you wish to store additional meta
		 * data against the full size image
		 */
		getImageMetaData: function(el){

			return  {};

		}

	};




}
(
	window,
	window.klass,
	window.Code.Util
));
