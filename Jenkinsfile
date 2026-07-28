pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'dev',
                    url: 'https://github.com/Vimalraj-7202/aws_pipeline-fe.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
        npm config set fetch-timeout 600000
        npm config set fetch-retry-maxtimeout 600000
        npm install
        '''
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Image Build') {
            steps {
                sh 'docker build -t aws_fe:v1 .'
            }
        }

        stage('Docker Containerize') {
            steps {
                sh 'docker run -d --name react-app -p 3000:80 aws_fe:v1'
            }
        }
    }
}
