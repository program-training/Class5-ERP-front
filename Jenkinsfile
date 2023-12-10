// Class5_ERP_Front
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/program-training/Class5-ERP-front']]])
                }
            }
        }
  
        stage('server build') {
            steps {
                script {
                    dir('server') {
                        sh 'echo "Building..."'
                        sh 'docker build -t class5-erp-front .'
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                echo 'Linting passed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'Class5_ERP_Front',
                    message: 'Build passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'Class5_ERP_Front',
                    message: 'Build failed  run npm run build to see errors',
                )
            }
        }
    }
}
