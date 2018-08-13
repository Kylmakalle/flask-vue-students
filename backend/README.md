Setting up python backend
```bash
python3.6 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
python server.py
```

Swagger API docs (+ api test)
```bash
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i /local/swagger.yaml \
    -l nodejs-server \
    -o /local/generated/
cd generated && npm start
```
