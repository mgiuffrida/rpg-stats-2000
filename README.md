# rpg-stats-2000

RPG Stats 2000: Example app a la Polymer Settings.

Demo: https://rpg-stats-2000.appspot.com

# Installing node/npm/bower #

The version of npm in apt-get is too old for bower.

    # Ensure ~/local/bin is on $PATH
    $ mkdir ~/local
    $ export PATH="$HOME/local/bin:$PATH"
    # Install Node
    $ mkdir -p /tmp/node-install && cd /tmp/node-install
    $ curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
    $ ./configure --prefix=~/local
    $ make install
    # Install NPM
    $ curl https://www.npmjs.org/install.sh | sh

Bower is automatically installed by the makefile.

# Syncing dependencies #

The makefile will update dependencies, including polymer components and testing libraries:

    $ make update

This just checks for npm and bower, and then runs:
    $ bower update
    $ npm install

# Runinng RPG-Stats-2000 #

rpg-stats-2000 must be served from a web server. It can be run using Google App Engine, available here:
https://cloud.google.com/appengine/downloads

or by using `python -m SimpleHTTPServer [port]`.

# Testing

From the command line:

    $ make test

This will launch karma, run the tests and watch the source files for changes. To
run once and exit, use:

    $ make single-test

Or, you can start karma manually:

    $ ./node_modules/karma/bin/karma start

You can shorten this command to 'karma start' if you run
'npm install -g karma-cli'.

To run a single test or test suite, change the test code to use describe.only
or it.only as appropriate. You can use the chromium dev tools inside the
Chrome instance that karma starts up in order to set breakpoints and otherwise
debug.

# LIBRARIES

karma: test runner. Runs the unit tests in an instance of Chrome and pipes the
       results to the command line. By default, it watches for changes to files
       and will automatically re-run the tests. To run once and exit, use
       'karma start --single-run' or 'make single-test'.

mocha: testing framework. Provides good asynchronous and synchronous test
       support. Tests run serially, so exceptions are reported for the right
       test case.

chai:  assertion library.
