pipeline {
    agent any
    stages {
        stage ('initialize') {
            steps {
                echo "initializing the app"
                sh 'npm install'
            }
        }
        stage ('test') {
            steps {
                echo "testing the app ..."
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                    sh 'npm run test'
                    sh 'exit 1'
                }
            }
        }
        stage ('build and push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                    sh "docker build -t teamable-app:v1.0.0 ."
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                    sh "docker tag teamable-app:v1.0.0 ernestklu/teamable-app:v1.0.0"
                    sh "docker push ernestklu/teamable-app:v1.0.0"
                }
            }
        }
        stage ('deploy') {
            steps {
                echo "SENT DOCKER IMAGE TO DOCKERHUB"
            }
        }
    }
}