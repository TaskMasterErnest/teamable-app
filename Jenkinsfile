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
                sh 'npm run test'
            }
        }
    }
}