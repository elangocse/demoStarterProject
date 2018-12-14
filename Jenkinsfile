node
{
  try {
   
    stage('source-checkout') {
      checkout scm
      sh "git clean -fdx"
      commit_id = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
	    
    }
    
    stage ('Initialize Phase') {
	
		echo "Initializing Build environment..."
   }
    
   stage('Build Phase') {
      echo "packaging source code..."
      sh 'mvn clean install'
    }
	
	stage('PCF Test Deploy Phase') {
         pushToCloudFoundry cloudSpace: 'dev', credentialsId: 'pivotal_prod_credentials',organization: 'cactus_testing', selfSigned: true,  pluginTimeout: 360, target: 'https://api.sys.pcf.dxc.com', manifestChoice: [manifestFile: 'manifest_test.yml']
    } 
    
   
  /*stage('PCF Prod Deploy Phase') {	
	      //pushToCloudFoundry cloudSpace: 'prod', credentialsId: 'pivotal_prod_credentials',organization: 'cactus', selfSigned: false,  pluginTimeout: 360, target: 'https://api.sys.pcf.dxc.com', manifestChoice: [manifestFile: 'manifest_prod.yml']
    }*/
	
   stage('Notify Phase') {
        notifyBuild('SUCCESS')
	currentBuild.result = 'SUCCESS'
   }
   stage('Post-Deploy Phase')
   {
    // Archive the built artifacts
    archive (includes: '**/service/target/surefire-reports/*')
    def props = readProperties file: "target/sonar/report-task.txt"
    SONAR_DASHBOARD_URL = props.dashboardUrl
    rtp parserName: 'HTML', stableText: "<div style='font-size:105%;font-family:Arial;'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SonarQube URL: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='http://dxccnajenkins.westus.cloudapp.azure.com:8080'>Click here for sonarQube reports </a></div>"   
    }
  } 
  catch (err) {
  notifyBuild('FAILURE')
  currentBuild.result = 'FAILURE'  
}

}//node

 def notifyBuild(String buildStatus) {
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def slackmessage="${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
  def emailRecipients = "${env.EMAIL_RECIPIENTS_USER}";  
  
  if (buildStatus == 'SUCCESS') {
    colorCode = '#00FF00'
    email_body='${SCRIPT, template="dxccna_html_sucess.template"}'
  } else if (buildStatus == 'FAILURE') { 
     email_body='${SCRIPT, template="dxccna_html_failure.template"}'
    colorCode = '#FF0000'
  }
  slackSend (channel:'#usermgmtbuildnotify', color: colorCode, message:slackmessage )
   
   emailext (
       body: email_body, 
       subject: subject, 
       to: emailRecipients
       )
 }
