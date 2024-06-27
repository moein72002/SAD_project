import { jwtDecode } from 'jwt-decode';

// // Secret key for signing the token
// const secretKey = 'your-very-secure-secret-key';

// // Payload to include in the token
// const payload = {
//     userId: 123,
//     username: 'johndoe',
//     email: 'johndoe@example.com'
// };

// Create a token
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE4ODgzODA3LCJleHAiOjE3MTg5NzAyMDd9.kpyygMRJ5wxy8_z0pQUt8A5OsE8J_CdQ92K5mOQiPto";

console.log('Generated Token:', token);

// Decode the token without verifying
const decoded = jwtDecode(token);
console.log('Decoded Token without verification:', decoded);

// // Verify and decode the token
// jwt.verify(token, secretKey, (err, verifiedDecoded) => {
//     if (err) {
//         console.error('Token verification failed:', err);
//     } else {
//         console.log('Verified and Decoded Token:', verifiedDecoded);
//     }
// });
