/*
 * JavaScript MD5 Demo JS
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global document, md5 */

;(function () {
  'use strict'

  var input = document.getElementById('input')
  document.getElementById('calculate').addEventListener(
    'click',
    function (event) {
      event.preventDefault()
      document.getElementById('result').value = md5(input.value)
    }
  )
  /*Added by AlphaGo start*/
  document.getElementById('calculaten').addEventListener(
    'click',
    function (event) {
      event.preventDefault()
      var n = 10
      var s = ""
        s = md5(input.value)
        document.getElementById('result').value = "times = 0 :  " + s
      for(var i = 1;i < n;i++){
        s = md5(s)
        document.getElementById('result').value += "\n" + "times = " + i + " :  " + s
      }
    }
  )
  /*Added by AlphaGo end*/
  input.value = '日本'
}())
