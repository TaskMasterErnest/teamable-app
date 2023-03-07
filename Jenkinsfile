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
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE')
                sh 'npm run test'
                sh 'exit 1'
            }
        }
    }
}