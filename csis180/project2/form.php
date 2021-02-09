<html>
<body>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $username = $_POST['username'];
  if (empty($name)) {
    echo "Username is empty";
  } else {
    echo $username;
  }
}
?>

</body>
</html> 