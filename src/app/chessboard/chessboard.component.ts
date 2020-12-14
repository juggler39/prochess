import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chessground } from 'chessground';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent implements AfterViewInit {
  @ViewChild('chessBoard', { static: false }) chessBoard!: ElementRef;
  board!: any;
  constructor() {}

  private initChessground(): void {
    this.board = Chessground(this.chessBoard.nativeElement, {
      orientation: 'white',
      coordinates: true,
      movable: {
        color: 'white',
        free: true,
      },
    });
  }

  ngAfterViewInit(): void {
    this.initChessground();
  }
}
