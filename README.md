![GitHub release (latest by date)](https://img.shields.io/github/v/release/adebande/simple-node-api) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/adebande/simple-node-api/Deploy) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/adebande/simple-node-api/Test?label=test)

# Simple Node API

Une application simple composée de deux micro-services : une API (Express.js), et une base de données MongoDB.

## :rocket: Installation 

### Docker Compose
```bash
git clone https://github.com/adebande/simple-node-api.git
mv .env.example .env
docker-compose up
```

### Kubernetes
```bash
git clone https://github.com/adebande/simple-node-api.git
mv .env.example .env
kubectl create secret generic app-secrets --from-env-file=.env
kubectl apply -f kubernetes/.
```

### Kubernetes (Minikube)
```bash
git clone https://github.com/adebande/simple-node-api.git
mv .env.example .env
minikube kubectl -- create secret generic app-secrets --from-env-file=.env
minikube kubectl -- apply -f kubernetes/.
minikube tunnel
```

## :bulb: Utilisation

Une fois installée via Docker Compose ou Kubernetes, l'application est accessible depuis l'URL suivante :

> http://localhost:8080

### Routes 

|                |Méthode      |Route        |Paramètres          |
|----------------|-------------|----------   |--------------------|
|Liste des noms  |GET          |`/names`     |                    |
|Nouveau nom     |POST         |`/names`     |?name=**votre_nom** |