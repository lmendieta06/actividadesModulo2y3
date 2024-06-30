import { Component } from '@angular/core';
import { NavegationComponent } from '../../components/navegation/navegation.component';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-no-encontrado',
  standalone: true,
  imports: [NavegationComponent, ChatBotComponent, FooterComponent],
  templateUrl: './no-encontrado.component.html',
  styleUrl: './no-encontrado.component.css'
})
export class NoEncontradoComponent {

}
