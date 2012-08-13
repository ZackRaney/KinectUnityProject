var leftHandPos:Vector3;
var rightHand:Vector3;
var leftHandScript:GameObject;



function Update(){
	leftHandScript = GameObject.FindWithTag("LeftHand");
	var LeftScript:LeftHandScript = GetComponent(LeftHandScript);
	leftHandPos = LeftScript.leftHandPos;
}

function OnTriggerEnter(){
	//var leftHand = GameObject.FindWithTag("LeftHand");
	//var rightHand = GameObject.FindWithTag("RightHand");
	
	//leftScript = leftHand.GetComponent(LeftHandScript);
	//rightScript = rightHand.GetComponent(RightHandScript);

	//	leftHand = leftHandScript.leftHandPos;
	
}

function OnTriggerStay(){
	transform.Translate(leftHandPos);
	renderer.material.color = Color.white;
}
	
