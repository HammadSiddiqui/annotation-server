const annotationController = require('../controllers/annotations');

test('Fetching Annotations', () => {
    test('responds to /', () => {
        const req = {  };

        const res = { data: '',
            send: function(input) { this.text = input }
        };
        annotationController.view(req, res);

        expect(res.text).toEqual('OK');
    });
});