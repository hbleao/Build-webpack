pipeline{
    options
    {
	    disableConcurrentBuilds()
    }
    agent any
    environment {
        //passar para o arquivo de confs
        // REGISTRY_URL = "955940554927.dkr.ecr.us-east-1.amazonaws.com"
        // REGISTRY_HTTPS = "https://${REGISTRY_URL}"


        //load    
        // REGISTRY_DEV_IMAGE = "devops-southsystem/rh-southsystem"
        // CHART_FOLDER = "./helm"
        // ECRREGION = "us-east-1"
        // ECRCRED = "aws_credentials_devops"
        // EMAILADM = "devops@southsystem.com.br"
        // KUBE_CRED = "kubecfg-dev-jobii"


        // DEV_REGISTRY = credentials('gitlab-registry')

        // DEPLOYMENT_NAME = sh(returnStdout: true, script: "cat settings.gradle | grep \"rootProject.name\" | awk '{print \$3}' | sed \"s/\'//g\" ").trim()
        DEPLOYMENT_NAME = "test-build"
        IMAGE = "jobii-${DEPLOYMENT_NAME}"
        //--
        // PROJECT_NAME = sh(returnStdout: true, script: "cat settings.gradle | grep \"rootProject.name\" | awk '{print \$3}' | sed \"s/\'//g\" | cut -d\"-\" -f1 ").trim()
        PROJECT_NAME = "jobii-ui"
        //--
        //values to "Initiating env_vars" stage
        ENV_VARS_REPO_URL="https://bitbucket.org/southsystem/jobii-app-env-configs.git"
        CREDENTIALS_ID="bitbucket_key"
        BRANCH="develop"
    }
    stages{
        stage("Initiating"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'bitbucket_key', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                    sh "git remote set-url origin https://${USERNAME}:${PASSWORD}@bitbucket.org/southsystem/${DEPLOYMENT_NAME}.git"
                    sh "git remote update"
                    sh "git config --add remote.origin.fetch +refs/heads/master:refs/remotes/${env.GIT_BRANCH}"
                }
            }
        }
        stage("Initiating env_vars"){
            steps{
                sh "mkdir jobii-env-vars"
                dir("${WORKSPACE}/jobii-env-vars"){
                    script{
                        git(
                            url: "${ENV_VARS_REPO_URL}",
                            credentialsId: "${CREDENTIALS_ID}",
                            branch: "${BRANCH}"
                        )
                        load "${WORKSPACE}/jobii-env-vars/jobii-env-vars"
                        sh "echo ${REGISTRY_DEV_IMAGE} XXXXX "
                    }
                }
            } 
        }





        stage("Docker Build Image"){
            steps{
                sh "echo INICIAR O DOCKER BUILD....."
                sh "docker build -t southsystem/${IMAGE}:${BUILD_NUMBER} ."
                sh "docker image ls "
            }
        }






        // =====================================================================================
        // ======================= DEVELOP======================================================
        // =====================================================================================
        stage("Docker Tag Develop"){
            steps{
                sh "docker image tag southsystem/${IMAGE}:${BUILD_NUMBER}   ${REGISTRY_URL}/${IMAGE}:${BUILD_NUMBER}"
                //955940554927.dkr.ecr.us-east-1.amazonaws.com/test-build:11
            }
        }
        stage("Upload Develop"){
            steps{
                
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${ECRCRED}"]]) {
                    // withEnv(["ECRREGION=${ECRREGION}", "REGISTRY_HTTPS=${REGISTRY_HTTPS}"]){
                    withEnv(["ECRREGION=${ECRREGION}", "REGISTRY_URL=${REGISTRY_URL}"]){
                    sh "echo YYY ${REGISTRY_URL}"    
                    sh '''
                        set +x
                        echo \$(aws ecr get-authorization-token --region ${ECRREGION} --output text \
                                --query 'authorizationData[].authorizationToken' | base64 -d | cut -d: -f2) | \
                                docker login -u AWS ${REGISTRY_URL} --password-stdin
                    '''  
                    sh "docker image push ${REGISTRY_URL}/${IMAGE}:${BUILD_NUMBER}"
                    }
                }
            }
        }
        stage("Deploy to Develop"){
            steps{

                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${ECRCRED}"]]) {

                    wrap([$class: 'org.jenkinsci.plugins.kubernetes.cli.KubectlBuildWrapper', credentialsId: "${KUBE_CRED}"]) {

                        sh "helm upgrade --install ${DEPLOYMENT_NAME}  ${CHART_FOLDER} -f ${CHART_FOLDER}/values.yaml\
                         --set image.tag=${BUILD_NUMBER} --debug" 
                    }
                }
            }
        }
    }
    post {
        success{
            deleteDir()
        }
        failure{
            deleteDir()
        }
        unstable{
            deleteDir()
        }
        aborted{
            deleteDir()
        }
    }
}
