pipeline {
    agent any
    stages {
        stage ('test') {
            steps {
                echo "testing the app"
                sh 'npm run test'
            }
        }
        stage ('end') {
            steps {
                echo "closing out"
            }
        }
    }
}