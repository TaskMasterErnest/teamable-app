pipeline {
    agent any
    stages {
        stage ('test') {
            echo "testing the app"
            steps {
                sh 'npm run test'
            }
        }
        stage ('end') {
            echo "closing out"
        }
    }
}