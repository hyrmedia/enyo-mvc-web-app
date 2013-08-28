/**
* Parent for the AJAX requests, provides default success and error handlers
*/
enyo.kind({
  name: 'AJAX.Parent'
  , kind: 'enyo.Ajax'
  , handleAs: "json"
  , dataType: "json"
  , contentType:"application/json"
  , url: ''
  , callback: '?'
  , cacheBust: false
  , data: {}
//  , crossDomain: true
//  , headers: [{'Access-Control-Allow-Credentials':true}]
//  , beforeSend: function(xhr){
//       xhr.withCredentials = true;
//  }
  , xhrFields: {withCredentials : true}
  , published: {
     owner: null
     , fireEvent: null
  }
  , constructor: function (props) {
      this.inherited(arguments);
      // properties mapped to published attributes get set
      console.log("AJAX.Parent " + this.fireEvent)
  }
  , makeRequest: function (params) {
      console.log('AJAX.Parent makeRequest ' + JSON.stringify(params));
      this.url = this.buildBaseURL() + this.rest;

      // attach responders to the transaction object
      this.response(this, "processResponse");
      this.error(this, "processError");

      // send parameters the remote service using the 'go()' method
      if (this.method == 'GET') {
        this.data = params;
      } else {
        this.postBody = JSON.stringify(params);
      }
      this.go(this.data);
  }
  , buildBaseURL: function() {
    return mvcApp.getAjaxBaseURL() + ':' + mvcApp.getAjaxBasePort();
  }
});
