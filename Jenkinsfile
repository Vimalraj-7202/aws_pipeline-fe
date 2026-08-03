pipeline {
    agent any

    environment {
        IMAGE_NAME = "vimalraj7202/aws_fe-deployment"
    }

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

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build \
                  -t ${IMAGE_NAME}:${BUILD_NUMBER} \
                  -t ${IMAGE_NAME}:latest .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh '''
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

                    docker push ${IMAGE_NAME}:${BUILD_NUMBER}
                    docker push ${IMAGE_NAME}:latest

                    docker logout
                    '''
                }
            }
        }

        stage('Trigger Render Deploy') {
            steps {
                sh '''
                curl -X POST "https://api.render.com/deploy/srv-d9o65up42hec738pjh0g?key=TFrvp8ZIZRE"
                '''
            }
        }

        stage('Deploy Locally') {
            steps {
                sh '''
                docker stop aws_fe-container || true
                docker rm aws_fe-container || true

                docker run -d \
                  --name aws_fe-container \
                  -p 3000:80 \
                  ${IMAGE_NAME}:${BUILD_NUMBER}
                '''
            }
        }
    }

    post {
        success {
            echo "Build #${BUILD_NUMBER} completed successfully."
        }
        failure {
            echo "Build failed."
        }
    }
}