#include<bits/stdc++.h>
using namespace std; 

void fun(int i,int j,int n,int m,vector<vector<int>>&vis, vector<vector<int>>&A, int mini_m, int maxi_m, int &ans){
    if(i<0 || j<0 || i>=n || j>=m){
        return; 
    }
    mini_m = min(mini_m, A[i][j]); 
    maxi_m = max(maxi_m,A[i][j]); 
    
    if(abs(mini_m-maxi_m)<=1){
        ans++;
        vis[i][j] = 1; 
        fun(i+1,j,n,m,vis,A,mini_m,maxi_m,ans); 
        fun(i-1,j,n,m,vis,A,mini_m,maxi_m,ans);
        fun(i,j+1,n,m,vis,A,mini_m,maxi_m,ans);
        fun(i, j-1, n, m, vis, A, mini_m, maxi_m,ans);
    }
}    
    


int solution(vector<vector<int>>A){
    int n,m; 
    n = A.size(); 
    m = A[0].size();
    int ans = 0; 
    vector<vector<int>> vis(n, vector<int>(m, 0)); 
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            if(vis[i][j]==0){
                int res = 0; 
                fun(i,j,n,m,vis,A,A[i][j], A[i][j],res);
                ans = max(ans, res);
            }
           
        }
    }
    return ans;
}

void callf(){
    
}
    
int main(){
    int t = 1;
    cin >> t;
    while(t--){
     
     callf();
     
     }
return 0;
}