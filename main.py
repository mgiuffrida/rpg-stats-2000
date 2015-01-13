# Copyright 2015 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

from google.appengine.api import app_identity
from google.appengine.ext.webapp import template
import os
import webapp2

path = os.path.join(os.path.dirname(__file__), 'settings.html')

f = open(path, 'rb')
main = f.read()
f.close()

class MainPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Strict-Transport-Security'] = (
        'max-age=10886400; includeSubDomains')
    self.response.headers['Content-Type'] = 'text/html'
    self.response.out.write(main)

app = webapp2.WSGIApplication([
    ('/.*', MainPage),
], debug=True)
