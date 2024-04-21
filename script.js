const infoContent = {
  'ssl-tls-role': `
    <H1>The role of SSL/TLS in HTTPS and how it encrypts data.</H1>
    <h2>What is SSL</h2>
    <p>
      <img src="images/SSL.png" alt="SSL"/>
    </p>
    <p>
      SSL (Secure Sockets Layer) was developed by Netscape in the mid-1990s as a way to secure transactions over the internet, particularly in web browsing, email, instant messaging, and voice-over-IP. The main purposes of SSL were:
    </p>
    <ol>
      <li><strong>Encryption:</strong> To keep the data sent across the internet private and secure by encrypting it. This prevents unauthorized access and makes it difficult for attackers to intercept and read the data.</li>
      <li><strong>Authentication:</strong> To verify that the parties exchanging information are who they claim to be. SSL uses digital certificates to authenticate the identity of websites and associated web servers.</li>
      <li><strong>Data Integrity:</strong> To ensure that the data sent between a web browser and web server is not altered or tampered with during transmission.</li>
    </ol>
    <h2>What is TLS</h2>
    <p>
      TLS (Transport Layer Security) is an improved version of SSL and was introduced in 1999 by the Internet Engineering Task Force (IETF). It has since undergone several updates to strengthen its security features. TLS includes three key layers:
    </p>
    <ol>
      <li><strong>Handshake Protocol:</strong> This protocol allows the server and client to authenticate each other and to negotiate an encryption algorithm and cryptographic keys before data is exchanged. During the handshake, the following steps occur:</li>
      <li><strong>ClientHello/ServerHello:</strong> Negotiation begins with these messages. They include which version of TLS (e.g., 1.2, 1.3) each party uses, list of supported ciphers, and session-specific data.</li>
      <li><strong>Certificate Exchange:</strong> The server (and optionally the client) sends a digital certificate to establish identity.</li>
      <li><strong>Key Exchange:</strong> Methods such as RSA or Diffie-Hellman are used to establish a shared secret key.</li>
    </ol>
    <h2>SSL/TLS Protocol</h2>
    <p>
      SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network. When a server and client communicate, TLS ensures that no third party may eavesdrop or tamper with any message.
    </p>
    <h2>Encryption with HTTPS</h2>
    <p>
      HTTPS (Hyper Text Transfer Protocol Secure) uses TLS to encrypt the data sent between the client and the server. This encryption is crucial to protect the data from being read or modified by unauthorized parties.
    </p>
    <h2>Process of TLS in HTTPS:</h2>
    <p>
      Handshake Protocol : Initially, the client and server establish a secure connection through a TLS handshake. This involves:
    </p>
    <ol>
    <li>Authentication of the server (and optionally the client) using digital certificates.</li>
    <li>Negotiation of which encryption algorithms (ciphers) will be used.</li>
    <li>Establishment of secret keys for encryption.</li>
    </ol>
    <img src="images/SSLTLS-Handshake.png" alt="Handshake"/>
    <h2>Data Transmission</h2>
    <p>
      After the handshake, all transmitted data is encrypted with the established keys using symmetric encryption, which is efficient for large amounts of data.
    </p>
    <h2>Digital Certificates and Authentication</h2>
    <p>
      A key aspect of the TLS protocol is its use of digital certificates, which are verified using public key cryptography. Certificates are issued by trusted entities called Certificate Authorities (CA) and are used to authenticate the identity of the parties.
    </p>
    <h2>Key Exchange Mechanisms</h2>
    <p>
      During the handshake, the client and server agree on a session key for encrypting messages. Key exchange algorithms like Diffie-Hellman or RSA are used, ensuring that the session key can be established securely even over an insecure channel.
    </p>
    <h2>Encryption Algorithms</h2>
    <p>
      Once the session key is established, data can be encrypted and decrypted by both parties during the session. Common algorithms include AES (Advanced Encryption Standard) and ChaCha20
    </p>
    <p>
      If you want to learn more deeply about HTTPS, SSL, TLS, please click 
    <a href="https://www.youtube.com/watch?v=EnY6fSng3Ew" target="_blank">video</a>
      to watch the video.
    </p>
    <a href="https://www.youtube.com/watch?v=EnY6fSng3Ew" target="_blank">
      <img src="images/Certificate Authority.png" alt="Certificate"/ width="600">
    </a>
    
      <div id="quiz-container">
      <h2>Quick Quiz</h2>
      <p id="ssl-question" class="quiz-question">Does SSL encrypt data to prevent eavesdropping?</p>
      <button id="yes-button">Yes</button>
      <button id="no-button">No</button>
      <p id="answer-result"></p>
    </div>
    `,
  'ca-importance': `
  <h1>Certificate Authorities (CAs)</h1>
  <h2>Do you know about the Certificate Authorities (CAs)?</h2>
  <p>Please select your answer:</p>
  <button id="ca-yes-button">Yes</button>
  <button id="ca-no-button">No</button>
  <p id="ca-answer-result"></p>

  <h1 class="subtitle">Certificate Authorities (CAs) and their importance in the trust model of HTTPS</h1>

  <p>A crucial component of the HTTPS trust architecture are Certificate Authorities (<a href="https://www.ssl.com/article/what-is-a-certificate-authority-ca/">Certificate Authorities</a>). Digital certificates are used by HTTPS, the secure version of HTTP, to provide secure connections between a web server and a client, like a web browser.</p>

  <div class="video-container">
    <p>To learn more about this topic, you can watch the following video: <a href="https://www.youtube.com/watch?v=EnY6fSng3Ew">video</a></p>
  </div>

  <div class="image-container">
    <img src="images/certificate-authority.png" alt="Certificate Authority">
  </div>

  <p class="subtitle">1. What are Certificate Authorities (CAs)?</p>
  <p>Trustworthy companies called Certificate Authorities (CAs) provide the framework for secure online transactions and communication. Digital certificates are cryptographic documents that associate a public key with a particular organization, such as a software developer, website, or email address. They distribute them independently. These certifications are crucial in the digital realm for fostering trust and ensuring secure communication.</p>
  <p>At the summit of a hierarchical structure that directs CA operations is a root CA. Self-signed Root CAs are thought to be trustworthy by default. Intermediate CAs can issue certificates on behalf of the root CA as they are connected to the latter. This hierarchical structure allows for forming a chain of trust, where trust in the root CA is passed on to the intermediate CAs and, ultimately, to the issued certificates.</p>

  <p class="subtitle">2. The Trust Model of HTTPS</p>
     <p>HTTPS stands for Hypertext Transfer Protocol Secure, the secure variant of the HTTP protocol used on the World Wide Web. It provides data integrity, authentication, and encryption to ensure the privacy and security of sensitive data sent between a web browser and a web server. The HTTPS trust model relies on CAs to supply and validate certificates for secure communication.</p>

  <p class="subtitle">3. Role of CAs in the Trust Model</p>

  <p class="subtitle">a. Certificate Issuance:</p>
     <p><b>A digital certificate must be issued for a website to enable HTTPS.</b> Since the CA authenticates the identity of the website owner, it is essential to this procedure. Numerous tests are made as part of this verification process, such as organization validation, identity verification of those connected to the firm, and domain ownership verification. The domain name, expiration date, public key, and other significant details about the website are included in the digital certificate that the CA subsequently creates.</p>

  <p class="subtitle">b. Authentication and Verification:</p>
     <p><b>CAs employ several methods to verify the legitimacy of the business applying for a certificate.</b> Among these methods are domain validation, extended validation, and organization validation. Domain validation ensures that the person requesting the certificate can obtain it for the specified domain. Extended validation comprises a more comprehensive verification process that verifies the company's actual location and legal status. Organization validation, which lies between domain and extended validation, calls on the CA to confirm the identity and legitimacy of the organization.</p>

  <p class="subtitle">c. Trust Hierarchy:</p>
     <p><b>The CA system's trust hierarchy guarantees certificates' reliability and validity.</b> Because Root CAs are self-signed and the highest authority in the chain, operating systems, and web browsers automatically trust them. The root CA is connected to intermediate CAs, which can issue certificates on its behalf. This hierarchical structure enables the chain of trust, in which each CA derives its confidence from that of the CA above it. A web browser searches for the trusted CA listed on a certificate it encounters in order to verify the chain of trust.</p>

  <p class="subtitle">d. Certificate Revocation:</p>
     <p><b>While CAs make every effort to provide trustworthy certificates, there are circumstances in which a certificate may need to be revoked.</b> This could occur if a certificate's private key is compromised, the certificate has expired, or the certificate holder no longer meets the criteria. CAs oversee servers for the Certificate Revocation Lists (CRLs) and Online Certificate Status Protocol (OCSP) in order to handle certificate revocation. By confirming each certificate's revocation status, these technologies enable web browsers to reject compromised or invalid certificates swiftly.</p>

  <p class="subtitle">4. Browser and Operating System Integration:</p>
     <p>Because of their interactions with CAs, operating systems, and web browsers are essential components of the HTTPS trust paradigm. The "root store" is a list of trusted root CAs that have been made available. Thanks to this relationship, operating systems and browsers can independently confirm the legitimacy of certificates that websites display. The browser downloads the displayed certificate and authenticates the website's chain of trust when a user accesses an HTTPS-secured website. When a browser detects a secure connection—shown by a padlock icon—it reassures users that surfing is safe if the certificate is authentic and issued by a reputable CA. When a certificate cannot be trusted or does not pass the verification process, the browser notifies users of possible security risks.</p>

  <p class="subtitle">Conclusion:</p>
     <p>Certificate Authorities (CAs) are crucial components of the HTTPS trust architecture in the digital sphere, ensuring secure communication and fostering trust. By verifying businesses and offering reliable digital certificates, CAs support secure online transactions, safeguarding sensitivedata, and the growth of a secure digital environment. Everyone benefits when consumers and organizations can make better decisions regarding online security and trust because they have a better grasp of how CAs function, enhancing the dependability and safety of the internet.</p>

  <div class="bullet-points">
    <p class="points"><strong><u>Here are some bullet points to sum up the above topic:</u></strong></p>
    <ul>
      <li><span class="blue-bold">Identity verification:</span> CAs verify the legitimacy of an organization when a business requests a digital certificate, such as a website. You may be positive that the business claiming to be the owner of a website is, in fact, the rightful owner by using this verification method.</li>
      <li><span class="blue-bold">Reliable certificate issuance:</span> Digital certificates that connect a public key to a domain or organization are issued by CAs. Operating systems and web browsers trust these certificates, enabling safe connections between users and websites.</li>
      <li><span class="blue-bold">Browser Trust List:</span> Web browsers keep a list of trustworthy CAs on trust lists. Users may surf with ease and confidence since browsers automatically trust certificates signed by these reliable CAs.</li>
    </ul>
  </div>

  `,
  "url-differences":`
  <h1>HTTPS Crucial Role in for Security of Websites </h1>
  <p>
    Hypertext Transfer Protocol is referred to as HTTP. This is a collection of guidelines that enables servers for websites and web browsers such as Safari and Chrome to communicate.
    The request-response model is used by HTTP.
  </p>
  
  <div class="highlight">
    <p>
      For instance, his/her browser will send an inquiry to the website's server when someone types the URL of a website into the URL bar.
    </p>
    <img src="images/1146.jpg" alt="Small Image" class="small-image" width="500">
    <p>
      The link that exists between the web browser and the website's server ends when the information is transferred to the browser. If anyone moves to other website pages on the site, the browser will create additional links as required.
    </p>
  </div>
  
  <div class="highlight">
    <p>
      However, HTTP has a few notable shortcomings:
    </p>
    <ul>
      <li>Text that is plain is transmitted over HTTP in an unencrypted state. This implies that all conveyed information can be simply interceptable and readable by everyone on the identical network.</li>
      <li>When using HTTP, the website's authentication cannot be verified or authenticated.</li>
      <li>HTTP provides no defense against manipulation.</li>
      <li>Data leaks, man-in-the-middle attacks, and session hijacking are among the risks that websites accessible over HTTP are susceptible to.</li>
      <li>Attackers can alter data before it reaches its intended destination.</li>
    </ul>
    <p>
      Additionally, material and URLs supplied over HTTP may be blocked by browsers by displaying a "Not Secure" webpage. HTTPS became possible because of the security flaws in HTTP.
    </p>
  </div>

  <img src="images/1157.jpg" alt="Small Image" class="small-image" width="500">
  
  <h1>How Does HTTPS Work?</h1>
  <p>
    With additional encryption, HTTPS is more secure than HTTP.
    HTTPS facilitates communication between the web browser and the website's server over an encrypted link. TLS and SSL certificate is the security mechanism utilized by HTTPS.
    A legitimate SSL/TLS license secures a secure HTTPS link to a website, which is indicated by the padlock symbol adjacent to the URL bar:
  </p>
  
  <img src="images/1171.jpg" alt="Small Image" class="small-image"  width="500">
  
  <div class="highlight">
    <p>
      The private and public keys for encryption are included in SSL/TLS certificates to protect information exchanged among browsers and sites.
      To avoid unwanted access, the connection between the web browser and the server is encrypted using the keys that are found in the certifications. By doing this, attackers find it difficult to steal their information.
    </p>
  </div>
  
  <img src="images/1200.jpg" alt="Small Image" class="small-image"  width="500">

  <br>

  <a href="https://www.semrush.com/blog/http-vs-https/" target="_blank">Please click here to visit the website, which is the reference. Thank you!</a>
  `,
  'https-advancements': `
  <style>
    #text01 {font-family: "Arial Black", "Calibri";}
    #text02 {font-family: "Microsoft New Tai Lue", "Arial Black";}
    #color01 {color: rgb(0, 102, 255);}
    #color02 {color: rgb(255, 153, 51);}
    #color03 {color: rgb(0, 204, 0);}
    #color04 {color: rgb(204, 102, 255);}
  </style>
  <h1 id="color01">Limitation of HTTPS</h1>
  <div id="text01">
    <p>&#128187; HTTPS protects users by encrypting the data transfer to prevent someone from intercepting the data in the middle. There is a problem, clients rarely exactly type https:// when browsing, they may just type the website name. The browser assumes that clients want to use HTTP. In this situation, the client is requesting by HTTP, not HTTPS. Then, the client is not protected by HTTPS.</p> 
    <p>Usually, the web server knows the client is using HTTP and redirects the client to HTTPS. HTTPS does not protect the initial request and the redirection response, it is easily attacked by hackers.</p>
    <p>Hackers may become the man in the middle when clients send requests to the server by HTTP. The hacker acts like the client sending the same request through HTTPS. In this situation, the web server will respond to the hacker by HTTPS, and the hacker will send back the response to the client by HTTP. The server and client do not know a man is in the middle. Hackers can intercept the data during the data transfer, which is SSL-stripping man-in-the-middle attacks.</p>
  </div>
  <img src="images/strip attack.jpg " alt="strip attack" width="500"><br>
  Useful links:<a href="https://https.cio.gov/hsts/">The HTTPS-only standard</a><br>
  <a href="https://tellyourtale.com/web-design/https-alone-is-not-enough/">HTTPS Alone Is Not Enough Add another layer of website security by implementing HSTS</a><br>
  <a href="https://www.youtube.com/watch?v=-MWqSD2_37E&t=234s">Youtube: HSTS - HTTP Strict Transport Security</a>
  <h1 id="color02">Use of HSTS</h1>
  <p id="text01">&#128680; Only HTTPS is not entirely secure as it cannot protect against attacks such as Man-in-the-middle attacks. People try to increase security by adding one more security layer, which is HTTP Strict Transport Security (HSTS). HSTS is a web security policy that instructs browsers always to use HTTPS. Mainly designed to fix SSL-stripping man-in-the-middle attacks. With HSTS, it prevents the client from not typing https:// and eliminates the server redirecting the client to HTTPS. When HSTS is enabled, the browser only uses https:// to connect, even if the users type or click the link of http://. Users are unable to click through warnings about invalid certificates.</p>
  <img src="images/hsts.jpg" alt="SSL" width="500"><br>
  <h1 id="color03">HSTS Preload</h1>
  <p id="text01">&#128204; When users first visit the website, the browser does not know the website uses HSTS. HSTS does not protect them until the first successful connection, so users may still use HTTP to connect. To solve this problem, major browsers apply the “HSTS preload list”, which is a list of domains. When users visit these domains, the HSTS will automatically apply. Anyone can submit their domain to the “HSTS preload list” if it fulfills all the following requirements.</p>
  <div id="color04">
    <ol id="text02">
      <li>Root domain and all subdomains enable the HTTPS</li>
      <li>HSTS policy includes all subdomains</li>
      <li>Website redirects from HTTP to HTTPS</li>
    </ol>
  </div>
`,
'references-list': `
  <h1>References List</h1>
  <ul>
    <li>Collins, S. (2023, November 3). <a href="https://www.semrush.com/blog/http-vs-https/" target="_blank">HTTP vs. HTTPS: Differences, Benefits, and Migration Tips. Semrush Blog.</a></li>
    <li>SSL Corp. (2024, March 4). <a href="https://www.ssl.com/article/what-is-a-certificate-authority-ca/" target="_blank">What is a Certificate Authority (CA)? - SSL.com.</a></li>
    <li>Laith Academy. (2023, December 20). <a href="https://www.youtube.com/watch?v=EnY6fSng3Ew" target="_blank">HTTPS, SSL, TLS & Certificate Authority explained [Video]. YouTube.</a></li>
    <li>HTTP strict transport security. (n.d.). <a href="https://https.cio.gov/hsts/" target="_blank">Cio.gov.</a></li>
    <li>Salch, M. (2018, September 17). <a href="https://tellyourtale.com/web-design/https-alone-is-not-enough/" target="_blank">HTTPS alone is not enough. Tell Your Tale Marketing & Design.</a></li>
    <li>Ramuglia, G. (2023, November 8). <a href="https://ioflood.com/blog/does-ssl-need-dedicated-ip/" target="_blank">Is a Dedicated IP for each SSL Certificate still needed? Linux Dedicated Server Blog.</a></li>
    <li>Halagan, P. (2022, May 2). <a href="https://halagandesign.com/http-vs-https-safe-unsafe-google-weighs/" target="_blank">HTTP vs HTTPS, safe or unsafe, Google Weighs in. Halagan Design.</a></li>
    <li>Let’s Talk Graphics. (n.d.). <a href="https://www.letstalkgraphics.com/tag/ssl/" target="_blank">SSL Archives - let’s talk graphics.</a></li>
    <li>What is an SSL certificate? | how to get a free SSL certificate | cloudflare. (n.d.). <a href="https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/" target="_blank">Cloudflare.</a></li>
    <li>Understanding the SSH encryption and connection process. DigitalOcean. (n.d.). <a href="https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process" target="_blank">DigitalOcean.</a></li>
  </ul>
`


};


document.addEventListener('DOMContentLoaded', function() {
  // Attach event listeners and initialize functionality here
  document.querySelectorAll('.option-bar button').forEach(button => {
    button.addEventListener('click', () => changeInfo(button.dataset.info));
  });
});

function changeInfo(section) {
  const infoDisplay = document.getElementById('info-display');
  if (infoContent.hasOwnProperty(section)) {
      infoDisplay.innerHTML = infoContent[section];
      if (section === 'ssl-tls-role') {
          setupSSLQuiz();
      } else if (section === 'ca-importance') {
          setupCAQuiz();
      }
  } else {
      console.error('Section does not exist:', section);
  }
}

function setupSSLQuiz() {
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const result = document.getElementById('answer-result');

  yesButton.onclick = function() {
      result.textContent = "Correct! SSL does encrypt data to prevent eavesdropping.";
      result.style.color = "green"; // Change text color to green for correct
  };

  noButton.onclick = function() {
      result.textContent = "Incorrect. SSL indeed encrypts data to ensure privacy.";
      result.style.color = "red"; // Change text color to red for incorrect
  };
}

function setupCAQuiz() {
  const yesButton = document.getElementById('ca-yes-button');
  const noButton = document.getElementById('ca-no-button');
  const result = document.getElementById('ca-answer-result');

  yesButton.onclick = function() {
      result.textContent = "Great! Certificate Authorities play a crucial role in establishing trust and security in online communication.";
      result.style.color = "green"; // Change text color to green for correct answer
  };

  noButton.onclick = function() {
      result.textContent = "No problem! Certificate Authorities (CAs) are entities that issue digital certificates to verify the authenticity of websites.";
      result.style.color = "red"; // Change text color to red for incorrect answer
  };
}





