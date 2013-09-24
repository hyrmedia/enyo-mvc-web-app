/**
* DeleteSystemMessage AJAX requests: mark a system message as archived
* takes parameter systemMessageId
*
* - processResponse()
* - processError()
*/
enyo.kind({
  name: 'AJAX.DeleteSystemMessage'
  , kind: 'AJAX.Parent'
  , method:'DELETE'
  , rest:'/api/v1/systemMessage/delete'
  , constructor: function(props) {
      this.inherited(arguments);
      // properties mapped to published attributes get set
      // console.log(this.fireEvent)
  }
  , processResponse: function(inSender, inResponse) {
      console.log('AJAX.DeleteSystemMessage processResponse ');
      if (inResponse) {
       if (this.fireEvent) {
         this.owner.bubble(this.fireEvent, {userdata: inResponse, authenticated: true});
        }
      } else {
        this.owner.bubble(this.fireEvent, {authenticated: false, response: inSender.xhrResponse, message: 'Problem contacting the server, please try again later.'});
      }
      // console.log(JSON.stringify(inResponse, null, 2));
  }
  , processError: function(inSender, inResponse) {
      console.log('AJAX.DeleteSystemMessage processError');
      if (this.fireEvent) {
        this.owner.bubble(this.fireEvent, {authenticated: false, response: inSender.xhrResponse, response: inResponse, message: 'Problem deleting system message.'});
      }
  }
});


