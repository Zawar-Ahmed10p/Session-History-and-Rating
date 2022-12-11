<template>
  <div class="table-users" >
    <div class="header">History</div>
    <div style="height: 500px; overflow: auto">
 <table id="tableComponent" cellspacing="0" >
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
      <tr v-for="(item, index) in filteredList" :key='item'>
      <!-- <td v-for="field in fields" :key='field'>{{item[field]}}</td> -->
      <td><img :src=item.createdBy.avatarURL alt="not available" />{{index}}</td>
      <td>{{item.type}}</td>
      <td>{{item.servicePlatform}}</td>
      <td>{{item.happensAt}}</td>
      
    </tr>
  </tbody>
</table> 
</div>
</div>
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

<style>
/* table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #04AA6D;
  color: white;
} */
body {
	 /* background-color: #91ced4; */
   background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%);
   
}
 body * {
	 box-sizing: border-box;
   
}
 .header {
	 background-color: #327a81;
	 color: white;
	 font-size: 1.5em;
	 padding: 1rem;
	 text-align: center;
	 text-transform: uppercase;
}
 img {
	 border-radius: 50%;
	 height: 60px;
	 width: 60px;
}
 .table-users {
	 border: 1px solid #327a81;
	 border-radius: 10px;
	 box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
	 max-width: calc(100% - 2em);
	 margin: 1em auto;
	 overflow: hidden;
	 width: 800px;
}
 table {
	 width: 100%;
}
 table td, table th {
	 color: #2b686e;
	 padding: 10px;
}
 table td {
	 text-align: center;
	 vertical-align: middle;
}
 table td:last-child {
	 font-size: 0.95em;
	 line-height: 1.4;
	 text-align: left;
}
 table th {
	 background-color: #daeff1;
	 font-weight: 300;
}
 table tr:nth-child(2n) {
	 background-color: white;
}
 table tr:nth-child(2n + 1) {
	 background-color: #edf7f8;
}
 @media screen and (max-width: 700px) {
	 table, tr, td {
		 display: block;
	}
	 td:first-child {
		 position: absolute;
		 top: 50%;
		 transform: translateY(-50%);
		 width: 100px;
	}
	 td:not(:first-child) {
		 clear: both;
		 margin-left: 100px;
		 padding: 4px 20px 4px 90px;
		 position: relative;
		 text-align: left;
	}
	 td:not(:first-child):before {
		 color: #91ced4;
		 content: "";
		 display: block;
		 left: 0;
		 position: absolute;
	}
	 td:nth-child(2):before {
		 content: "Name:";
	}
	 td:nth-child(3):before {
		 content: "Email:";
	}
	 td:nth-child(4):before {
		 content: "Phone:";
	}
	 td:nth-child(5):before {
		 content: "Comments:";
	}
	 tr {
		 padding: 10px 0;
		 position: relative;
	}
	 tr:first-child {
		 display: none;
	}
}
 @media screen and (max-width: 500px) {
	 .header {
		 background-color: transparent;
		 color: #fff;
		 font-size: 2em;
		 font-weight: 700;
		 padding: 0;
		 text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
	}
	 img {
		 border: 3px solid;
		 border-color: #daeff1;
		 height: 100px;
		 margin: 0.5rem 0;
		 width: 100px;
	}
	 td:first-child {
		 background-color: #c8e7ea;
		 border-bottom: 1px solid #91ced4;
		 border-radius: 10px 10px 0 0;
		 position: relative;
		 top: 0;
		 transform: translateY(0);
		 width: 100%;
	}
	 td:not(:first-child) {
		 margin: 0;
		 padding: 5px 1em;
		 width: 100%;
	}
	 td:not(:first-child):before {
		 font-size: 0.8em;
		 padding-top: 0.3em;
		 position: relative;
	}
	 td:last-child {
		 padding-bottom: 1rem !important;
	}
	 tr {
		 background-color: white !important;
		 border: 1px solid #6cbec6;
		 border-radius: 10px;
		 box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
		 margin: 0.5rem 0;
		 padding: 0;
	}
	 .table-users {
		 border: none;
		 box-shadow: none;
		 overflow: visible;
	}
}
 
</style>