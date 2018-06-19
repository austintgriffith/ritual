#!/bin/bash

#First, you need to point the DNS for backend.captain.sh to MDFProxC (52.207.125.74)
# Then, run the let's encrypt for backend.captain.sh on MDFProxC
# ssh MDFProxC "cd headproxy;./autossl.sh"
# Finally, point the DNS back to 34.237.103.213


echo "Downloading fullchain.pem from MDFProxC...";
ssh MDFProxC 'sudo cat /etc/letsencrypt/live/backend.captain.sh/fullchain.pem' 2>/dev/null > fullchain.pem
openssl x509 -text -noout -in fullchain.pem | grep "Not After"
echo "Downloading privkey.pem from MDFProxC...";
ssh MDFProxC 'sudo cat /etc/letsencrypt/live/backend.captain.sh/privkey.pem' 2>/dev/null > privkey.pem
echo "Downloading backend.captain.sh.pem from MDFProxC...";
ssh MDFProxC 'sudo cat /home/ubuntu/headproxy/haproxy/backend.captain.sh.pem' 2>/dev/null > backend.captain.sh.pem
openssl x509 -text -noout -in backend.captain.sh.pem| grep "Not After"

echo "Uploading fullchain.pem to MDFCaptain...";
scp fullchain.pem MDFCaptain:.captain/captain-backend/
ssh MDFCaptain 'openssl x509 -text -noout -in .captain/captain-backend/fullchain.pem | grep After'
echo "Uploading privkey.pem to MDFCaptain...";
scp privkey.pem MDFCaptain:.captain/captain-backend/
echo "Uploading backend.captain.sh.pem to MDFCaptain...";
scp backend.captain.sh.pem MDFCaptain:headproxy/haproxy/


echo "Uploading fullchain.pem to suge...";
scp fullchain.pem suge:.captain/captain-backend/
ssh suge 'openssl x509 -text -noout -in .captain/captain-backend/fullchain.pem | grep After'
echo "Uploading privkey.pem to suge...";
scp privkey.pem suge:.captain/captain-backend/
echo "Uploading backend.captain.sh.pem to suge...";
scp backend.captain.sh.pem suge:headproxy/haproxy/
ssh suge 'openssl x509 -text -noout -in headproxy/haproxy/backend.captain.sh.pem | grep After'


echo "

Done. You will need to ./captainRestart.sh on both suge and MDFCaptain.
";
