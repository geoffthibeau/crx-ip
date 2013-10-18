var propel_group__IP = {
  the_url_: 'http://icanhazip.com',

  /**
   * Sends an XHR GET request to grab the IP address. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
  show_IP_text: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.the_url_, false);
    req.onload = this.get_IP_text_.bind(this);
    req.send(null);
  },

  /**
   * Handle the 'onload' event of our XHR request, generated in
   * 'show_IP_text', by generating a 'p' element, and placing the
   * IP address inside of it.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  get_IP_text_: function (e) {
    var the_IP_ = e.target.responseText;
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(the_IP_));
    document.body.appendChild(p);
  }
};

// Run our script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  propel_group__IP.show_IP_text();
});
