<template>
 <table id="tableComponent" class="table table-bordered table-striped">
  <thead>
    <tr>
      <!-- loop through each value of the fields to get the table header -->
      <!-- <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
        {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
       </th> -->
       <th>ID</th><th>Type</th><th>Service Platform</th><th>Happens At</th>
    </tr>
  </thead>
  <!-- {{filteredList}} -->
  <!-- {{filteredList.sessions[0].servicePlatform}}
  {{filteredList.sessions[0].type}}
  {{filteredList.sessions[0].happensAt}} -->
  <tbody>
      <!-- Loop through the list get the each student data -->
      <tr v-for="item in filteredList" :key='item'>
      <!-- <td v-for="field in fields" :key='field'>{{item[field]}}</td> -->
      <td>{{item.id}}</td><td>{{item.type}}</td><td>{{item.servicePlatform}}</td><td>{{item.happensAt}}</td>
    </tr>
  </tbody>
</table> 
</template>

<script>
    export default {
        name: 'fetchHistory',
        data() {
            const filteredList = [
                // {ID:"01", Name: "Abiola Esther", Course:"Computer Science", Gender:"Female", Age:"17"},
                // {ID:"02", Name: "Robert V. Kratz", Course:"Philosophy", Gender:"Male", Age:'19'},
                // {ID:"03", Name: "Kristen Anderson", Course:"Economics", Gender:"Female", Age:'20'},
                // {ID:"04", Name: "Adam Simon", Course:"Food science", Gender:"Male", Age:'21'},
                // {ID:"05", Name: "Daisy Katherine", Course:"Business studies", Gender:"Female", Age:'22'},  
                ]

            const fields = [
                // 'id','Name','Course','Gender','Age'
                ]
                return  {fields,filteredList}
                
        },
        async created(){
            console.log(import.meta.env.VITE_BASE_URL)
        await this.history()
    
 },
        methods: {
          history() {
            // console.log("-------->",localStorage.getItem('user-token'))
            let user = JSON.parse(localStorage.getItem('user-token'));
              this.axios.get(`${import.meta.env.VITE_BASE_URL}v1/sessions?_relations=rating&_criteria=billable,unresolved&happensBefore=2022-12-08T06:40:57&limit=50&role=creator&skip=0`,
                        {
                            headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + user.token
                            }
                        }
                        ).then((response)=>{
                            // console.log("--->",response.data.token)
                            if(response.data.token != "") {
                                if (response.data) {
                                    console.log(response.data)
                                    this.filteredList=response.data.sessions
                                    // return response.data
                                    }
                            } else {
                                console.log("The username and / or password is incorrect");
                            }
                        })
                  




            return {
                input: {
                    username: "",
                    password: ""
                }
            }
            }
          }
        }
</script>

