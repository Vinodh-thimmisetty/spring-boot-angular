import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Default Server Name';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() {

    setTimeout( () => {
        this.allowNewServers = true;
    } , 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server created !! name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
