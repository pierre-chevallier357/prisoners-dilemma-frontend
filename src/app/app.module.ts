import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './components//game/game.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { MatInputModule } from '@angular/material/input';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { WaitingPlayerComponent } from './components/waiting-player/waiting-player.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GameResultsComponent } from './components/game-results/game-results.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EndGameDialogComponent } from './components/end-game-dialog/end-game-dialog.component';
import { SelectStrategyComponent } from './components/select-strategy/select-strategy.component';
import { HomeComponent } from './components/home/home.component';
import { GameRulesComponent } from './components/game-rules/game-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ConnectionComponent,
    CreateGameComponent,
    JoinGameComponent,
    WaitingPlayerComponent,
    GameResultsComponent,
    EndGameDialogComponent,
    SelectStrategyComponent,
    HomeComponent,
    GameRulesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
