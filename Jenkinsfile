pipeline {
    agent any
    stages {
        stage ('test') {
            echo "testing the app"
            sh 'npm run test'
        }
        stage ('end') {
            echo "closing out"
        }
    }
}